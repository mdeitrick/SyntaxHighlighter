$(document).ready(function() 
{
    // Variables that get the code, split it up, and flags
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

    for (var j = 0; j < split.length; j++) 
    {
        // If the quote flag is set to 'true'...
        if (chkQ == 1) 
        {
            // If the string ends with a '"'...
            if (split[j].match(/."/)) 
            {
                // Apply quote css and set the quotes flag to 'false'
                split[j] = '<span class="quotes">' + split[j] + '</span>';
                chkQ = 0;
            } 
            
            // Else continue applying the quotes css to the code
            else split[j] = '<span class="quotes">' + split[j] + '</span>';
        }
        
        // If the comment flag is set to 'true'
        if (chkC == 1) 
        {
            // If at the end of a line...
            if (split[j].match(/\s/)) 
            {
                // Apply comment css and set the comments flag to 'false'
                split[j] = '<span class="comments">' + split[j] + '</span>';
                chkC = 0;
            } 
            
            // Else continue applying the comments css to the code
            else split[j] = '<span class="comments">' + split[j] + '</span>';
        } 
        
        // If both quote and comment flags are set to 'false'
        else if (chkQ == 0 && chkC == 0) 
        {
            // If there is a reserved word, or the string is 'true' or 'false', apply the reserved word css to the code
            if ($.inArray(split[j], array) > 0 || split[j].match(/true/) || split[j].match(/false/)) split[j] = '<span class="reserved">' + split[j] + '</span>';
            
            // If there is a digit in the code, apply the digits css to the code
            else if (split[j].match(/\d/)) split[j] = '<span class="digits">' + split[j] + '</span>';
            
            // If there is a starting quote or the character does not match a space...
            else if (split[j].match(/"./) && !split[j].match(/ /)) 
            {
                // Apply the quotes css to the code and set the quotes flag to 'true'
                split[j] = '<span class="quotes">' + split[j] + '</span>';
                chkQ = 1;
            } 
            
            // If there are '//'...
            else if (split[j].match(/\/\//)) 
            {
                // Apply the comments css to the code and set the comments flag to 'true'
                split[j] = '<span class="comments">' + split[j] + '</span>';
                chkC = 1;
            }
        }
    }
    
    // Join the syntax highlighted code back together and put it in the html document
    $("#java").html(split.join(' '));
});
