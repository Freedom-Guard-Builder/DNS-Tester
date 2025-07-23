const serverData = {
    // --- Iranian Servers (for sanction bypassing) ---
    'Shecan (شکن)': {
        url: 'https://free.shecan.ir/dns-query',
        features: ['گذر از تحریم'],
        privacy: 'عالی',
        group: 'ایرانی',
    },
    'Begzar (بگذر)': {
        url: 'https://dns.begzar.ir/dns-query',
        features: ['گذر از تحریم'],
        privacy: 'استاندارد',
        group: 'ایرانی',
    },
    '403.online': {
        url: 'https://dns.403.online/dns-query',
        features: ['گذر از تحریم'],
        privacy: 'استاندارد',
        group: 'ایرانی',
    },
    'Radar Game': {
        url: 'https://dns.radar.game/dns-query',
        features: ['گیمینگ', 'گذر از تحریم'],
        privacy: 'استاندارد',
        group: 'ایرانی',
    },
    Electro: {
        url: 'https://dns.electrotm.org/dns-query',
        features: ['گذر از تحریم'],
        privacy: 'نامشخص',
        group: 'ایرانی',
    },
    xStack: {
        url: 'https://rustdns.devefun.org/dns-query',
        features: ['گذر از تحریم', 'نصب پکیج‌های لینوکس'],
        privacy: 'عالی',
        group: 'ایرانی',
    },

    // --- Global Providers (Performance, Privacy & Security) ---
    'Cloudflare (1.1.1.1)': {
        url: 'https://cloudflare-dns.com/dns-query',
        features: ['سرعت بالا', 'بدون فیلتر'],
        privacy: 'عالی (بدون لاگ)',
        group: 'جهانی',
    },
    'Cloudflare (Security)': {
        url: 'https://security.cloudflare-dns.com/dns-query',
        features: ['محافظت از بدافزار'],
        privacy: 'عالی (بدون لاگ)',
        group: 'جهانی',
    },
    'Cloudflare (Family)': {
        url: 'https://family.cloudflare-dns.com/dns-query',
        features: ['محافظت خانوادگی'],
        privacy: 'عالی (بدون لاگ)',
        group: 'جهانی',
    },
    'Google (8.8.8.8)': {
        url: 'https://dns.google/dns-query',
        features: ['سرعت بالا', 'بدون فیلتر'],
        privacy: 'استاندارد',
        group: 'جهانی',
    },
    'Quad9 (Security)': {
        url: 'https://dns.quad9.net/dns-query',
        features: ['امنیت بالا', 'بلاک بدافزار'],
        privacy: 'عالی (بدون لاگ)',
        group: 'جهانی',
    },
    'OpenDNS (Home)': {
        url: 'https://doh.opendns.com/dns-query',
        features: ['امنیت پایه'],
        privacy: 'استاندارد',
        group: 'جهانی',
    },
    'OpenDNS (Family)': {
        url: 'https://doh.familyshield.opendns.com/dns-query',
        features: ['محافظت خانوادگی'],
        privacy: 'استاندارد',
        group: 'جهانی',
    },
    'Cisco Umbrella': {
        url: 'https://doh.umbrella.com/dns-query',
        features: ['امنیت بالا', 'شرکتی'],
        privacy: 'استاندارد',
        group: 'جهانی',
    },
    'Mozilla DNS': {
        url: 'https://mozilla.cloudflare-dns.com/dns-query',
        features: ['حریم خصوصی ویژه'],
        privacy: 'عالی (سیاست موزیلا)',
        group: 'جهانی',
    },
    'Mullvad DNS': {
        url: 'https://doh.mullvad.net/dns-query',
        features: ['حریم خصوصی', 'بدون لاگ'],
        privacy: 'عالی',
        group: 'جهانی',
    },
    'Bitdefender DNS': {
        url: 'https://dns.bitdefender.net/dns-query',
        features: ['امنیت', 'ضد فیشینگ'],
        privacy: 'استاندارد',
        group: 'جهانی',
    },
    'Yandex (Safe)': {
        url: 'https://safe.dot.dns.yandex.net/dns-query',
        features: ['امنیت', 'محافظت خانوادگی'],
        privacy: 'استاندارد',
        group: 'جهانی',
    },
    AliDNS: {
        url: 'https://dns.alidns.com/dns-query',
        features: ['سرعت بالا'],
        privacy: 'استاندارد',
        group: 'جهانی',
    },

    // --- Ad-blocking & Anti-tracking Providers ---
    'AdGuard (Default)': {
        url: 'https://dns.adguard-dns.com/dns-query',
        features: ['حذف تبلیغات', 'امنیت'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'AdGuard (Unfiltered)': {
        url: 'https://unfiltered.adguard-dns.com/dns-query',
        features: ['بدون فیلتر', 'بدون سانسور'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'NextDNS (Public)': {
        url: 'https://dns.nextdns.io',
        features: ['حذف تبلیغات', 'قابل تنظیم'],
        privacy: 'قابل تنظیم',
        group: 'حذف تبلیغات',
    },
    'Control D (Free)': {
        url: 'https://freedns.controld.com/p0',
        features: ['حذف تبلیغات', 'امنیت'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'RethinkDNS (Sky)': {
        url: 'https://sky.rethinkdns.com/',
        features: ['حذف تبلیغات', 'ضد ردیابی'],
        privacy: 'عالی',
        group: 'حذف تبلیغات',
    },
    'Alternate DNS': {
        url: 'https://dns.alternate-dns.com/dns-query',
        features: ['حذف تبلیغات'],
        privacy: 'نامشخص',
        group: 'حذف تبلیغات',
    },
    'DNS-Low': {
        url: 'https://dnslow.me/dns-query',
        features: ['حذف تبلیغات', 'امنیت'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'Avast (Default)': {
        url: 'https://secure.avastdns.com/dns-query',
        features: ['حذف تبلیغات', 'امنیت'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'Bitdefender': {
        url: 'https://dns.bitdefender.net/dns-query',
        features: ['بدون فیلتر', 'بدون سانسور'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'ComSS': {
        url: 'https://dns.comss.one/dns-query',
        features: ['حذف تبلیغات', 'قابل تنظیم'],
        privacy: 'قابل تنظیم',
        group: 'حذف تبلیغات',
    },
    'Nord DNS': {
        url: 'https://dns1.nordvpn.com/dns-query',
        features: ['حذف تبلیغات', 'امنیت'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'Kernel Error': {
        url: 'https://dns.kernel-error.de/dns-query',
        features: ['بدون فیلتر', 'بدون سانسور'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'DNS-53': {
        url: 'https://dns.dns-53.us/dns-query',
        features: ['حذف تبلیغات', 'قابل تنظیم'],
        privacy: 'قابل تنظیم',
        group: 'حذف تبلیغات',
    },
    'Wikimedia': {
        url: 'https://wikimedia-dns.org/dns-query',
        features: ['حذف تبلیغات', 'امنیت'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'Uncensored DNS': {
        url: 'https://anycast.uncensoreddns.org/dns-query',
        features: ['بدون فیلتر', 'بدون سانسور'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },
    'SurfShark': {
        url: 'https://dns.surfsharkdns.com/dns-query',
        features: ['حذف تبلیغات', 'قابل تنظیم'],
        privacy: 'قابل تنظیم',
        group: 'حذف تبلیغات',
    },
    'Smart Guard': {
        url: 'https://dns.smartguard.io/dns-query',
        features: ['حذف تبلیغات', 'امنیت'],
        privacy: 'عالی (بدون لاگ)',
        group: 'حذف تبلیغات',
    },

    // --- Miscellaneous & Niche ---
    OpenNIC: {
        url: 'https://doh.opennic.org/dns-query',
        features: ['DNS جایگزین', 'دسترسی به TLD های خاص'],
        privacy: 'متغیر',
        group: 'متفرقه',
    },
};
const initialServers = Object.keys(serverData).map(name => ({
    id: name.replace(/[^a-zA-Z0-9]/g, ''),
    name: name,
    status: 'neutral',
    ping: null,
    isBest: false,
    ...serverData[name],
}));
export {
    serverData,
    initialServers,
}