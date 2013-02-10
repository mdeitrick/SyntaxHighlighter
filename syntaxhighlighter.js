$(document).ready(function() {
    var code = $("#java").html(); 
    var split = code.split(' '); 
    var chkQ = 0;                 
    var chkC = 0; 
    
    var array = ["abstract", "assert", "boolean", "break", "byte", "case",
                 "catch", "char", "class", "const", "continue", "default",
                 "do", "double", "else", "else if", "enum", "extends",
                 "final", "finally", "float", "for", "goto", "if", "import",
                 "implements", "instanceof", "int", "interface", "long",
                 "native", "new", "null", "package", "private", "protected",
                 "public", "return", "short", "static", "strictfp", "super",
                 "switch", "synchronized", "this", "throw", "throws",
                 "transient", "void", "volatile", "while"];

    for (var j = 0; j < split.length; j++) {
        if (chkQ == 1) {
            if (split[j].match(/."/)) {
                split[j] = '<span class="quotes">' + split[j] + '</span>';
                chkQ = 0;
            } else {
                split[j] = '<span class="quotes">' + split[j] + '</span>';
            }
        }
        if (chkC == 1) {
            if (split[j].match(/\s/)) {
                split[j] = '<span class="comments">' + split[j] + '</span>';
                chkC = 0;
            } else {
                split[j] = '<span class="comments">' + split[j] + '</span>';
            }
        } else if (chkQ == 0 && chkC == 0) {
            if ($.inArray(split[j], array) > 0 
                || split[j].match(/true/) 
                || split[j].match(/false/)) {
                split[j] = '<span class="reserved">' + split[j] + '</span>';
            } else if (split[j].match(/\d/)) {
                split[j] = '<span class="digits">' + split[j] + '</span>';
            } else if (split[j].match(/"./) && !split[j].match(/ /)) {
                split[j] = '<span class="quotes">' + split[j] + '</span>';
                chkQ = 1;
            } else if (split[j].match(/\/\//)) {
                split[j] = '<span class="comments">' + split[j] + '</span>';
                chkC = 1;
            }
        }
    }
    $("#java").html(split.join(' '));
});
