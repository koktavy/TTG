// JavaScript/jQuery file for talent.html custom Weebly insert.
// Handles loading of Talent profile resumes for optimization.

// Global Variables
var srcStart = "http://docs.google.com/viewer?url=https://www.weebly.com/editor/uploads/5/2/9/2/52921565/custom_themes/141067589987227329/files/resumes/";
var srcEnd = ".pdf&embedded=true";

function loadResume(clicked_href) {
    // Isolate Talent ID name from clicked headshot:
    var n = clicked_href.indexOf("#");
    var talent = clicked_href.slice(n + 1);
    // Build full resume link:
    var resume = srcStart + talent + srcEnd;
    // Get location to paste resume link:
    var goesHere = document.getElementById(talent).querySelector("embed");
    // Update resume src:
    goesHere.setAttribute("src", resume);
}
