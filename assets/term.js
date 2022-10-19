	jQuery(function($, undefined) {
 $('#termosin').terminal(function(command) {
   var dir = "/home/user/";

   if (command == 'help') {
     this.echo("\nAvailable commands:\n");
     this.echo("[[;yellow;]ls] \n=> To list files.\n")
     this.echo("[[;yellow;]pwd] \n=> To check current path.\n");
     this.echo("[[;yellow;]cd] [[;blue;]<folder name>] \n=> To change current directory.\n");
   } 
 
   else if (command == 'pwd'){
     this.echo("\n/home/user/\n")
   }

   else if (command == 'ls'){
     if (dir == '/home/user/'){
       this.echo("\nDownloads\n[[;red;]secret-files]\n.bashrc\n")
}
     else if (dir == '/home/user/secret-files/'){
       this.echo("\nCongratulations my dear hacker, I'm proud of you... take a screenshot.\n")
     }
   }
   
   else if (command == 'cd secret-files'){
     this.echo("\n[[;green;]Error]: privilages not enough for the user 'user0'\n")
   }

   else {
     if (command !== '') {
       try {
         var result = window.eval(command);
         if (result !== undefined) {
           this.echo(new String(result));
         }
       } catch(e) {
         this.error(new String(e));
       }
     } else {
       this.echo('');
     }
   }

 

 }, {
 greetings: 'Welcome to Termosin,\n\ntype [[;yellow;]help] to get some "help".\n',
 name: 'Termosin',
 prompt: '[[;red;]user0@termosin> ]',
 color: 'red'

 });
});
