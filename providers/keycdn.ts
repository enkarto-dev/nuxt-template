// https://image.nuxt.com/advanced/custom-provider
import { joinURL } from "ufo";

// import {} from '#image'

export function getImage(
  src: string,
  { baseURL, modifiers }: any = {},
  _ctx: any = {},
) {
  const q =
    "?" +
    Object.entries(modifiers)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  return {
    url: joinURL(baseURL, src + q),
  };
}
