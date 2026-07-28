#!/bin/bash
curl -X POST "https://api.cloudflare.com/client/v4/accounts/7fe6320f9d24c4919b26cf1bd58657fe/pages/projects/creonity-landing/domains" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"name":"creonity.com"}'
