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
RUN turbo prune --scope=@apps/mehrlicht --docker --out-dir=./out

FROM base AS installer

WORKDIR /app

ARG PUBLIC_JERBO_GATEWAY_URL
ARG PUBLIC_JERBO_SITE_URL
ARG PUBLIC_JERBO_CRM_URL
ARG JERBO_GATEWAY_SECRET
ARG JERBO_REFRESH_SECRET

ENV PUBLIC_JERBO_GATEWAY_URL=${PUBLIC_JERBO_GATEWAY_URL}
ENV PUBLIC_JERBO_SITE_URL=${PUBLIC_JERBO_SITE_URL}
ENV PUBLIC_JERBO_CRM_URL=${PUBLIC_JERBO_CRM_URL}
ENV JERBO_GATEWAY_SECRET=${JERBO_GATEWAY_SECRET}
ENV JERBO_REFRESH_SECRET=${JERBO_REFRESH_SECRET}

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
RUN turbo run build --filter=@apps/mehrlicht

RUN pnpm --filter=@apps/mehrlicht --prod deploy /app/deploy

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