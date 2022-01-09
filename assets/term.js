	jQuery(function($, undefined) {
 $('#termosin').terminal(function(command) {
   if (command == 'help') {
     this.echo("You can use the following:\n");
     this.echo("list files=>ls")
     this.echo("show current path=>pwd\n");
   } 
 
   else if (command == 'pwd'){
     this.echo("\n/root\n")
   }

   else if (command == 'ls'){
     this.echo("\nDownloads\n[[;red;]Secret files]\n.bashrc\n")
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
 greetings: 'Hello to Termosin, just type help.',
 name: 'Termosin',
 prompt: '[[;red;]root@termosin> ]',
 color: 'red'

 });
});