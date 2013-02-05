$(document).ready(function() {
    var code = $("#java").html(); // Get the code
    var split = code.split(' ');  // Split up each element
    var chkQ = 0;                 // Check for quotes
    var chkC = 0;                 // Check until end of comment line
    
    // Array of reserved words
    var array = ["abstract", "assert", "boolean", "break", "byte", "case",
                 "catch", "char", "class", "const", "continue", "default",
                 "do", "double", "else", "else if", "enum", "extends",
                 "final", "finally", "float", "for", "goto", "if", "import",
                 "implements", "instanceof", "int", "interface", "long",
                 "native", "new", "null", "package", "private", "protected",
                 "public", "return", "short", "static", "strictfp", "super",
                 "switch", "synchronized", "this", "throw", "throws",
                 "transient", "void", "volatile", "while"];

    // Great regex generator: jslab.dk/tools.regex.php
    // Set the CSS of reserved words, digits, strings, and comments
    for (var j = 0; j < split.length; j++) {
        // Check to see if chkQ is not set to true
        if (chkQ == 1) {
            // If the element matches word" or word', then set
            // flag to false and continue checking the rest of the code.
            // Else, continue setting the CSS to .quotes
            if (split[j].match(/."/)) {
                split[j] = '<span class="quotes">' + split[j] + '</span>';
                chkQ = 0;
            } else {
                split[j] = '<span class="quotes">' + split[j] + '</span>';
            }
        }
        // Check to see if chkC is not set to true
        if (chkC == 1) {
            // If end of the line then set chkC to false.
            // Else, continue setting the CSS of comments
            if (split[j].match(/\s/)) {
                split[j] = '<span class="comments">' + split[j] + '</span>';
                chkC = 0;
            } else {
                split[j] = '<span class="comments">' + split[j] + '</span>';
            }
        // If chkQ and chkC are set to false, then continue
        // checking for more reserved words, comments, digits
        // and comment lines and blocks
        } else if (chkQ == 0 && chkC == 0) {
            // If the element is a reserved word...
            if ($.inArray(split[j], array) > 0 
                || split[j].match(/true/) 
                || split[j].match(/false/)) {
                split[j] = '<span class="reserved">' + split[j] + '</span>';
            // If the element matches a digit...
            } else if (split[j].match(/\d/)) {
                split[j] = '<span class="digits">' + split[j] + '</span>';
            // If the element matches a " or '...
            } else if (split[j].match(/"./) && !split[j].match(/ /)) {
                split[j] = '<span class="quotes">' + split[j] + '</span>';
                chkQ = 1;
            // If the element matches //...
            } else if (split[j].match(/\/\//)) {
                split[j] = '<span class="comments">' + split[j] + '</span>';
                chkC = 1;
            }
        }
    }
    // Join all the split up elements back together!
    $("#java").html(split.join(' '));
});