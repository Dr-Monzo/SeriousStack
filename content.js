function hideSubstackNotes() {
    console.log("Running hideSubstackNotes script...");

    // Select elements containing the Notes feed
    const selectors = [
        'div.feedItem-ONDKv3',  // Individual note items
        'div.feedUnit-NTpfyQ',  // Possible container for notes
        'div[class*="feedItem-"]', // More general targeting for feed items
        'div[class*="feedUnit-"]'  // General targeting for feed unit
    ];

    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.display = "none";
            console.log("Hid element:", element);
        });
    });
}

// Run script immediately
hideSubstackNotes();

// Use MutationObserver to remove dynamically loaded content
const observer = new MutationObserver(hideSubstackNotes);
observer.observe(document.body, { childList: true, subtree: true });

console.log("MutationObserver is active, watching for Notes feed...");
