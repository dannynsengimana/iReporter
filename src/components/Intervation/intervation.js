import React from 'react';


function Intervation() {
  return (
    <form>
           <h3>Intervation Record</h3>
            
    <div className="form-group">
        <label>Full Name</label>
        <input type="text" className="form-control" placeholder="Enter your full name" />
    </div>

                <div class="form-group">
                         <label for="inputAddress">Address</label>
                           <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                          <label>Why Intervation</label>
                           <input type="text" className="form-control" placeholder="Why intervation" />
                 </div>
          <div class="form-group"> 
                       <label class="control-label">Upload image </label>
                  <input type="file" class="filestyle" data-icon="false"/>
            </div>
          <div className="btn-group btn-group-justified">
          <div class="form-group">
              <input type="submit" class="btn  btn-success" value="Create Record"/>
          </div>
          <div class="form-group">
              <input type="submit" class="btn btn-danger" value="Delete Record"/>
          </div>
          </div>
      </form>
  );
}

export default Intervation;