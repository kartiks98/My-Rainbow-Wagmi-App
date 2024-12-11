import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit Wagmi App",
  projectId: "60d6e8b9eb59c1662f464f6e00e6e7cb",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  // ssr: true,
});
