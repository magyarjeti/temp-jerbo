FROM node:20-alpine AS base

# Install turbo and pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk update && apk add --no-cache libc6-compat
RUN pnpm i -g turbo@2

# Create builder stage
FROM base AS builder

WORKDIR /app

COPY . .
RUN turbo prune --scope=@apps/blog --docker --out-dir=./out

FROM base AS installer

WORKDIR /app

ARG PUBLIC_JERBO_SITE_URL
ARG PUBLIC_JERBO_GATEWAY_URL

ENV PUBLIC_JERBO_SITE_URL=${PUBLIC_JERBO_SITE_URL}
ENV PUBLIC_JERBO_GATEWAY_URL=${PUBLIC_JERBO_GATEWAY_URL}

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
RUN turbo run build --filter=@apps/blog

RUN pnpm --filter=@apps/blog --prod deploy /app/deploy

# Create runner stage yolo
FROM base AS runner

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --chown=appuser:appgroup --from=installer /app/deploy /app
COPY --chown=appuser:appgroup --from=installer /app/deploy/build ./build
ENV NODE_ENV=production
USER appuser

EXPOSE 3000

CMD ["node", "build"]