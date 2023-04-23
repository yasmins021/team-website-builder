const Intern = require('../lib/intern.js');

describe("Intern", () => {
    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Daisy bloom';
            const id = '465838';
            const email = 'Daisybloom@imdengineering.com';
            const school = ' UCSDsoftwarebootcamp';
            const sampletesttextprediction = (`          
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Intern
      </h2>
    </header>
    <div class="p-3">
    <blockquote class="blockquote text-center">
      <p class="card-body">
      Daisy bloom
        <br />
      Employee ID: <br> 465838
      <br />
      Email: <a href="mailto:Daisybloom@imdengineering.com">Daisybloom@imdengineering.com</a>
      <br />
      School: UCSDsoftwarebootcamp
      </p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
            const intern = new Intern(name, id, email, school);
        
            expect(intern.appendint).toBe(sampletesttextprediction);
        });
    });
});