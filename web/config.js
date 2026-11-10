// Public browser configuration only.
// Never put PI_SERVER_API_KEY, Supabase service-role keys, or user access tokens here.
window.FOP_CONFIG = Object.freeze({
  ENVIRONMENT: "testnet-pi-browser",
  PI_SANDBOX: false, // Real Pi Browser, including Testnet; not the payment network selector.
  CHECKOUT_URL: "https://testnet.fileorganizercore.ir/checkout.html",
  SUPABASE_URL: "https://mjkjmwgjtnuvnedvtgqo.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_ZAAeiRgkF8U2PcfcqvAbtQ_EGqjle5Y",
  // Set to the real HTTPS release URL after publishing FileOrganizerCore-Setup.exe.
  DOWNLOAD_URL: "",
});
