import { ParseOptions, parse } from "cookie";
import { NextPageContext } from "next";
import { parseCookies as parseRequestCookies } from "nookies";

export { setCookie, destroyCookie } from "nookies";

const cookieStringFromSetCookie = (cookies: string[] = []): string =>
  cookies
    .map((cookie) => {
      const [keyValuePart] = cookie.split(";");
      return keyValuePart;
    })
    .join("; ");

const parseResponseCookies = (ctx: NextPageContext, options?: ParseOptions): Record<string, any> => {
  let responseCookies: Record<string, any> = {};
  if (ctx?.res) {
    const setCookieHeader = ctx.res.getHeader("Set-Cookie");
    const cookie = cookieStringFromSetCookie(Array.isArray(setCookieHeader) ? setCookieHeader : []);
    responseCookies = parse(cookie, options);
  }

  return responseCookies;
};

export const getCookie = (ctx: NextPageContext, name: string, options?: ParseOptions): string => {
  const responseCookies = parseResponseCookies(ctx, options);
  const requestCookies = parseRequestCookies(ctx);
  return responseCookies[name] || requestCookies[name];
};
