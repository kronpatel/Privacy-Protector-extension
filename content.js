const unsafeSites = ["unsafewebsite.com", "malicioussite.net"]; // Add unsafe websites

if (unsafeSites.some(site => window.location.href.includes(site))) {
    alert("Warning: This website may not be safe!");
}
