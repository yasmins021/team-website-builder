const Manager = require('../lib/manager.js');

describe("Manager", () => {

    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Daisy Bloom';
            const id = '465838';
            const email = 'Daisybloom@imdengineering.com';
            const number = '444-444-444';
            const sampletesttextprediction = (`          
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Manager
      </h2>
    </header>
    <div class="p-3">
    <blockquote class="blockquote text-center">
      <p class="card-body">
    Daisy Bloom
        <br />
      Employee ID: <br>465838
      <br />
      Email: <a href="mailto:Daisybloom@imdengineering.com">Daisybloom@imdengineering.com</a>
      <br />
      Phone: 444-444-444</p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
            const manager = new Manager(name, id, email, number);
       
            expect(manager.appendmgr).toBe(sampletesttextprediction);
        });
    });
});