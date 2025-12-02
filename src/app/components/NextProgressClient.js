"use client";
import NextProgress from "next-progress";

export default function NextProgressClient() {
  return (
    <NextProgress color="#eb7ad4" height={3} options={{ showSpinner: false }} />
  );
}
