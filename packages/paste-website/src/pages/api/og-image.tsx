/* eslint-disable no-console */
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

import { type Feature, type Package } from "../../utils/api";

export type PackageData = Package & Feature & { type: string };

export const config = {
  runtime: "edge",
  unstable_allowDynamic: [
    "**/node_modules/lodash/_root.js", // use a glob to allow anything in the function-bind 3rd party module
  ],
};

const EMPTY_PACKAGE_DATA = {
  name: "",
  description: "Description",
  version: "",
  status: "",
  Feature: "Badge",
  Figma: "",
  Documentation: false,
  "Design committee review": "",
  "Engineer committee review": "",
  Code: "",
  "Component Category": "",
  "Product suitability": [""],
  type: "",
};

function PasteLogo(): JSX.Element {
  return (
    <div style={{ width: "90px", height: "90px", display: "flex" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="none" viewBox="0 0 90 90">
        <g clipPath="url(#a)">
          <path
            fill="#F22F46"
            d="M83.127 0H6.873A6.873 6.873 0 0 0 0 6.873v76.254A6.873 6.873 0 0 0 6.873 90h76.254A6.873 6.873 0 0 0 90 83.127V6.873A6.873 6.873 0 0 0 83.127 0Z"
          />
          <path
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M60.81 51.302H29.097a7.196 7.196 0 0 1-7.188-7.188v-.01l.208-22.825a7.195 7.195 0 0 1 7.188-7.18H61.02a7.195 7.195 0 0 1 7.187 7.186v.013l-.208 22.824a7.196 7.196 0 0 1-7.189 7.18ZM24.568 44.12a4.53 4.53 0 0 0 4.529 4.519H60.81a4.53 4.53 0 0 0 4.525-4.525v-.01l.21-22.824a4.53 4.53 0 0 0-4.525-4.52H29.303a4.53 4.53 0 0 0-4.525 4.525v.013l-.21 22.822Z"
          />
          <path
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M27.794 75.903a6.014 6.014 0 0 1-6.002-6.01v-13.99a7.236 7.236 0 0 1 7.227-7.227h11.914l13.501-30.27a7.227 7.227 0 0 1 13.769 3.075v22.63a7.235 7.235 0 0 1-7.228 7.228h-18.32l-9.422 21.11a6.027 6.027 0 0 1-5.439 3.454Zm1.225-24.564a4.571 4.571 0 0 0-4.565 4.564v13.99a3.344 3.344 0 0 0 6.361 1.433l8.92-19.987H29.018Zm14.823-2.662h17.133a4.571 4.571 0 0 0 4.565-4.565v-22.63a4.565 4.565 0 0 0-8.691-1.954L43.842 48.677Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h90v90H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AssetStatus({ status }: { status?: string }): JSX.Element {
  if (status === "yes") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 20 20">
          <path
            fill="green"
            fillRule="evenodd"
            d="M10 2a8 8 0 110 16 8 8 0 010-16zm2.997 5c-.266 0-.521.106-.71.294l-3.286 3.294L7.712 9.29a1.003 1.003 0 00-1.418 1.418l1.998 1.997a1 1 0 001.418 0l3.996-3.994A1.002 1.002 0 0012.996 7z"
          />
        </svg>
      </div>
    );
  }
  if (status === "not applicable") {
    return <div style={{ color: "rgb(96, 107, 133)", fontSize: "20px", lineHeight: "28px" }}>(n/a)</div>;
  }
  return <div style={{ color: "rgb(96, 107, 133)", fontSize: "20px", lineHeight: "28px" }}>Pending</div>;
}

function OgImageCard({ packageData }: { packageData: PackageData }): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingTop: "60px",
        paddingLeft: "56px",
        paddingRight: "56px",
        paddingBottom: "52px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "598px" }}>
          <div
            style={{
              fontFamily: '"TwilioSansTextSemiBold"',
              fontSize: "48px",
              lineHeight: "64px",
              color: "rgb(18, 28, 45)",
              paddingRight: "24px",
            }}
          >
            {packageData.Feature}
          </div>
          <div
            style={{
              fontFamily: '"TwilioSansText"',
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(96, 107, 133)",
              paddingRight: "24px",
            }}
          >
            {packageData.description}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <PasteLogo />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "rgb(96, 107, 133)",
            fontSize: "20px",
            lineHeight: "28px",
          }}
        >
          Status
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", width: "344px" }}>
            <div
              style={{
                color: "rgb(18, 28, 45)",
                fontSize: "20px",
                lineHeight: "28px",
                fontFamily: '"TwilioSansTextMedium"',
                width: "180px",
              }}
            >
              Code ready:
            </div>
            <AssetStatus status={packageData.Code} />
          </div>
          <div style={{ display: "flex", width: "344px" }}>
            <div
              style={{
                color: "rgb(18, 28, 45)",
                fontSize: "20px",
                lineHeight: "28px",
                fontFamily: '"TwilioSansTextMedium"',
                width: "180px",
              }}
            >
              Design assets:
            </div>
            <AssetStatus status={packageData.Figma} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", width: "344px" }}>
            <div
              style={{
                color: "rgb(18, 28, 45)",
                fontSize: "20px",
                lineHeight: "28px",
                fontFamily: '"TwilioSansTextMedium"',
                width: "180px",
              }}
            >
              Documentation:
            </div>
            <AssetStatus status={packageData.Documentation != null ? "yes" : undefined} />
          </div>
          <div style={{ display: "flex", width: "344px" }}>
            <div
              style={{
                color: "rgb(18, 28, 45)",
                fontSize: "20px",
                lineHeight: "28px",
                fontFamily: '"TwilioSansTextMedium"',
                width: "180px",
              }}
            >
              Peer review:
            </div>
            {!packageData["Design committee review"] || !packageData["Engineer committee review"] ? (
              <div style={{ color: "rgb(96, 107, 133)", fontSize: "20px", lineHeight: "28px" }}>Pending</div>
            ) : (
              <AssetStatus status="yes" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const LOG_PREFIX = "[/api/og-image]:";

export default async function handler(req: NextRequest): Promise<ImageResponse> {
  console.log(`${LOG_PREFIX} Incoming request`);

  const { searchParams } = new URL(req.url);
  const componentRequested = searchParams.get("componentRequested");

  if (!componentRequested) {
    throw new Error("No componentRequested parameter provided");
  }

  console.log(`${LOG_PREFIX} component requested: ${componentRequested}`);

  const [packageType, packageName] = componentRequested.split("/");

  if (!packageType || !packageName) {
    throw new Error("Couldn't parse componentRequested parameter into packageType/packageName");
  }

  console.log(`${LOG_PREFIX} packageType: ${packageType}`);
  console.log(`${LOG_PREFIX} packageName: ${packageName}`);

  const packageData: PackageData = EMPTY_PACKAGE_DATA;

  console.log(`${LOG_PREFIX} package data`, packageData);

  console.log(`${LOG_PREFIX} get fonts`);

  // Make sure the font exists in the specified path:
  const fontData = await fetch(
    new URL("https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Regular.woff", import.meta.url),
  ).then(async (res) => res.arrayBuffer());
  const fontDataMedium = await fetch(
    new URL("https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Medium.woff", import.meta.url),
  ).then(async (res) => res.arrayBuffer());
  const fontDataSemiBold = await fetch(
    new URL("https://assets.twilio.com/public_assets/paste-fonts/1.5.1/TwilioSansText-Semibold.woff", import.meta.url),
  ).then(async (res) => res.arrayBuffer());

  console.log(`${LOG_PREFIX} return image`);

  return new ImageResponse(<OgImageCard packageData={packageData} />, {
    width: 800,
    height: 420,
    fonts: [
      {
        name: "TwilioSansText",
        data: fontData,
        style: "normal",
      },
      {
        name: "TwilioSansTextMedium",
        data: fontDataMedium,
        style: "normal",
        weight: 500,
      },
      {
        name: "TwilioSansTextSemiBold",
        data: fontDataSemiBold,
        style: "normal",
        weight: 600,
      },
    ],
  });
}
/* eslint-enable no-console */
