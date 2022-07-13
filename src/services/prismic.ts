import { createClient } from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
    const prismic = createClient(
        process.env.PRISMIC_REPO_NAME,
        {
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    prismic.enableAutoPreviewsFromReq(req);

    return prismic;
}