/*
  Meal Prep Planner settings.
  Fill these in from your Supabase project (Project Settings → API / API Keys).
  Both values are safe to publish: the publishable/anon key only allows what the
  database privacy rules allow. NEVER put your Claude, Stripe or Supabase secret keys here.
*/
window.MEALPREP_CONFIG = {
  // e.g. "https://abcdefghijklm.supabase.co"
  SUPABASE_URL: "https://smmewrqtvpzrvrzbymda.supabase.co",

  // The "publishable" key (starts with sb_publishable_) or the legacy "anon" key (starts with eyJ)
  SUPABASE_KEY: "sb_publishable_FTIJlF4VVCa4S4R0J1YhWA_TiGnGLwv",

  // Optional: link to the free claude.ai version, shown to people who have Claude Pro
  CLAUDE_ARTIFACT_URL: "https://claude.ai/artifact/3amFKPvcb6DyzV8kD8dfVM",

  // Shown on the sign-up screen. Keep in step with the price you set in Stripe.
  PRICE_TEXT: "$2/month",

  // Shown on the sign-up screen. Keep in step with the TRIAL_BATCHES secret (2 batches = 1 round of 10 options).
  TRIAL_TEXT: "Your first plan is free"
};
