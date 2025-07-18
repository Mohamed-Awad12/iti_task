
// =================== Task 3 ===================

let adWindow, paragraph;

function openAdWindow() {
 
  adWindow = window.open("", "AdWindow", "width=600,height=400");


  
  id = setTimeout(() => {
    if (adWindow) {
          adWindow.document.write(`
        <html>
          <head><title>Advertisement</title></head>
          <body>
            <p class"para">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Is
    te est iusto inventore hic expedita dolores, asperiores r
    epellendus! Neque ducimus nam amet repellat sint natus ve
    ritatis, atque, sapiente temporibus fugit itaque.
            </p>
          </body>
        </html>
      `);

      adWindow.document.close(); 
    }
  }, 3000);


}

function closeCurrentPage() {
  adWindow.close();
}
