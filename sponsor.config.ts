import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "julien-r44",
    type: "user",
  },

  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      preset: tierPresets.small,
    },
    {
      title: "Sponsors",
      monthlyDollars: 14,
      preset: tierPresets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 29,
      preset: tierPresets.base,
    },
  ],

  renders: [
    {
      name: "sponsors",
      width: 800,
      formats: ["svg", "png"],
    },
    {
      renderer: "circles",
      name: "sponsors-circles",
      width: 1000,
      includePastSponsors: true,
    },
  ],
});
