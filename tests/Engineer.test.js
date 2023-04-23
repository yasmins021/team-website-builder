const Engineer = require('../lib/engineer.js');
// import engineer file from lib folder
describe("Engineer", () => {
    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Daisy bloom';
            const id = '465838';
            const email = 'Daisybloom@imdengineering.com';
            const ghub = 'bloomingengineer';
            const sampetesttextprediction = (
                `
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Engineer
      </h2>
    </header>
    <div class="p-3">
    <blockquote class="blockquote text-center">
      <p class="card-body">
     Daisy bloom
        <br />
           465838
      <br />
     Email: <a href="mailto:Daisybloom@imdengineering.com">Daisybloom@imdengineering.com</a>
      <br />
      Github: <a href="https://www.github.com/bloomingengineer">https://www.github.com/bloomingengineer</a>
      </p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
            const engineer = new Engineer(name, id, email, ghub);
       
            expect(engineer.appendeng).toBe(sampetesttextprediction);
        });
    });
});