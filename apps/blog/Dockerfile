# Base image
FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
RUN apk update && apk add --no-cache libc6-compat
RUN pnpm i -g turbo@2

# Builder stage
FROM base AS builder

WORKDIR /app

ARG USE_REMOTE_CACHE
ARG TURBO_TOKEN
ARG TURBO_TEAM

COPY . .

# Conditionally enable TurboRepo remote cache
RUN if [ "${USE_REMOTE_CACHE}" = "true" ]; then \
      echo "🔗 Enabling TurboRepo Remote Cache"; \
      export TURBO_TOKEN=${TURBO_TOKEN}; \
      export TURBO_TEAM=${TURBO_TEAM}; \
      turbo prune --scope=@apps/blog --docker --out-dir=./out; \
    else \
      echo "🚫 Skipping TurboRepo Remote Cache"; \
      turbo prune --scope=@apps/blog --docker --out-dir=./out; \
    fi

# Install dependencies
FROM base AS installer

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .

# Run Turbo build with or without remote cache
RUN if [ "${USE_REMOTE_CACHE}" = "true" ]; then \
      echo "🔗 Building with TurboRepo Remote Cache"; \
      export TURBO_TOKEN=${TURBO_TOKEN}; \
      export TURBO_TEAM=${TURBO_TEAM}; \
      turbo run build --filter=@apps/blog; \
    else \
      echo "🚫 Building without TurboRepo Remote Cache"; \
      turbo run build --filter=@apps/blog; \
    fi

RUN pnpm --filter=@apps/blog --prod deploy /app/deploy

# Runner stage
FROM base AS runner

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --chown=appuser:appgroup --from=installer /app/deploy /app
COPY --chown=appuser:appgroup --from=installer /app/deploy/build ./build

ENV NODE_ENV=production
USER appuser

EXPOSE 3000

CMD ["node", "build"]
