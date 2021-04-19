import React from "react";


class Members extends React.Component {

    render()  {
        return(
            <members style={{textAlign:  'left'}}>
                <div className="navbar navbar-default navbar-fixed-top">
			<div className="brand">
      <a href="index.html" style={{color:"dodgerblue"}}><h2>GEOGRACE ADMIN</h2></a>
			</div>
			<div className="container-fluid">
				
				<form className="navbar-form navbar-left">
					
				</form>
        <div id="navbar-menu">
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown">
							<a href="#" className="dropdown-toggle icon-menu" data-toggle="dropdown">
								<i className="lnr lnr-alarm"></i>
								<span className="badge bg-danger">5</span>
							</a>
							<ul className="dropdown-menu notifications">
								<li><a href="#" className="notification-item"><span className="dot bg-warning"></span>System space is almost full</a></li>
								<li><a href="#" className="notification-item"><span className="dot bg-danger"></span>You have 9 unfinished tasks</a></li>
								<li><a href="#" className="notification-item"><span className="dot bg-success"></span>Monthly report is available</a></li>
								<li><a href="#" className="notification-item"><span className="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>
								<li><a href="#" className="notification-item"><span className="dot bg-success"></span>Your request has been approved</a></li>
								<li><a href="#" className="more">See all notifications</a></li>
							</ul>
						</li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="lnr lnr-question-circle"></i> <span>Help</span> <i className="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul className="dropdown-menu">
								<li><a href="#">Basic Use</a></li>
								<li><a href="#">Working With Data</a></li>
								<li><a href="#">Security</a></li>
								<li><a href="#">Troubleshooting</a></li>
							</ul>
						</li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="assets/img/user.png" className="img-circle" alt="Avatar" /> <span>Samuel</span> <i className="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul className="dropdown-menu">
								<li><a href="#"><i className="lnr lnr-user"></i> <span>My Profile</span></a></li>
								<li><a href="#"><i className="lnr lnr-envelope"></i> <span>Message</span></a></li>
								<li><a href="#"><i className="lnr lnr-cog"></i> <span>Settings</span></a></li>
								<li><a href="#"><i className="lnr lnr-exit"></i> <span>Logout</span></a></li>
							</ul>
						</li>
						
					</ul>
				</div>
			</div>
        
            </div>

            <div id="wrapper">
    <div id="sidebar-nav" className="sidebar">
			<div className="sidebar-scroll">
				<nav>
					<ul className="nav">
						<li><a href="/"><i className="lnr lnr-briefcase"></i> <span>Dashboard</span></a></li>
						<li><a href="/home"><i className="lnr lnr-home"></i> <span>Home</span></a></li>
						<li><a href="/investor-relations"><i className="lnr lnr-heart"></i> <span>Investor Relations</span></a></li>
						<li><a href="/members" className="active"><i className="lnr lnr-users" ></i> <span>Members</span></a></li>
						<li><a href="/downloadables" ><i className="lnr lnr-download"></i> <span>Downloadables</span></a></li>		
					</ul>
				</nav>
			</div>
		</div>
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
				<div className="row">
					<ol className="breadcrumb">
						<li><a href="#">
							<em className="fa fa-users"></em>
						</a></li>
						<li className="active">Members</li>
					</ol>
				</div>
				
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">MEET THE TEAM</h1>
					</div>
				</div>
                <div className="row">
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>Add New Member Form </h3></div>
							<div className="panel-body">
							<label for="ClassMember">Class Member:</label>
								<select name="cars" id="cars">
									<option value="RegularDirector">Regular Director</option>
									<option value="IndependentDirector">Independent Director</option>
									<option value="ExecutiveDirector">Executive Director</option>
								</select>
								<div className="form-group">
											<label style={{fontweight:  'normal'}}>Add Photo</label>
											<input type="file" />
											
										</div>
										
										<div className="form-group">
											<label>Member Name</label>
											<input className="form-control" />
										</div>
							
										<label>Background</label>
										<div className="form-group">
										<textarea name="BusinessBackground"></textarea>
										<div className="form-group">
										
										</div>
										<button className="btn btn-success" >Add</button>	
										</div>
										</div>
						</div>
					</div>
                    <div className="col-md-4">
					<div className="panel panel-default">
						<div className="panel-heading"><h3>Publish Update</h3></div>
						<div className="panel-body">
						<div>
								<button className="btn btn-sm btn-info" style={{float:  'right'}} >Update</button>	
							 </div>
							 <div>
								 <span><em className="fa fa-eye">&nbsp;</em>Visibility: Public</span>&nbsp;<a href="#" style={{color:  'blue'}} >edit</a>
								 
							 </div>
							 <div>
								 <span><em className="fa fa-calendar-check-o">&nbsp;</em>Published: Immediately</span>&nbsp;<a href="#" style={{color:  'blue'}} >edit</a>
								
							</div>
							<button className="btn btn-sm btn-info"  style={{float:  'right'}}>Publish</button>
						</div>
            </div>
            </div>
            </div><h3>BOARD COMITTEE MEMBERS</h3>
            <div className="panel panel-default">
						
							<div className="panel-body">
								
										
										<div className="form-group">
				
											<h1>Audit Committee</h1>
											<div className="container">
		  <div className="table">
			<div className="col-4">
			  <table className="table table-bordered">
				<thead>
				  <tr>
					<th scope="col">Name</th>
					<th scope="col">Position</th>
					<th scope="col">Actions</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>Manuel G. Ong</td>
					<td>Chairman</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				  <tr>
					<td>Delfin S. Castro</td>
					<td>Member</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				  
				  <tr>
					<td>Felixes G. Latonero</td>
					<td>Member</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				</tbody>
			  </table>
			</div>
		  </div>
		  
		  <button className="btn btn-success"  >Update</button>	
											
		</div>
        <h1>Governance Committee</h1>
											<div className="container">
		  <div className="table">
			<div className="col-4">
				<table className="table table-bordered">
					<thead>
					  <tr>
						<th scope="col">Name</th>
						<th scope="col">Position</th>
						<th scope="col">Actions</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>Manuel G. Ong</td>
						<td>Chairman</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					  <tr>
						<td>Raymond T. Koa</td>
						<td>Member</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					  
					  <tr>
						<td>Felixes G. Latonero</td>
						<td>Member</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					</tbody>
				  </table>
			</div>
		  </div>
		  
		  <button className="btn btn-success"  >Update</button>	
											
		</div>
        <h1>Compensation Committee</h1>
										<div className="container">
	  <div className="table">
		<div className="col-4">
			<table className="table table-bordered">
				<thead>
				  <tr>
					<th scope="col">Name</th>
					<th scope="col">Position</th>
					<th scope="col">Actions</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>Felixes G. Latonero</td>
					<td>Chairman</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				  <tr>
					<td>Delfin S. Castro</td>
					<td>Member</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				  
				  <tr>
					<td>Raymond T. Koa</td>
					<td>Member</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				</tbody>
			  </table>
			</div>
		  </div>
		  
		  <button className="btn btn-success"  >Update</button>	
											
		</div>
        <h1>Nomination Committee</h1>
											<div className="container">
		  <div className="table">
			<div className="col-4">
				<table className="table table-bordered">
					<thead>
					  <tr>
						<th scope="col">Name</th>
						<th scope="col">Position</th>
						<th scope="col">Actions</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>Manuel G. Ong</td>
						<td>Chairman</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					  <tr>
						<td>Delfin S. Castro</td>
						<td>Member</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					  
					  <tr>
						<td>Felixes G. Latonero</td>
						<td>Member</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					</tbody>
				  </table>
			</div>
		  </div>
		  
		  <button className="btn btn-success" >Update</button>	
											
		</div>
        <h1>Risk Management Committee</h1>
										<div class="container">
											<table class="table table-bordered">
												<thead>
												  <tr>
													<th scope="col">Name</th>
													<th scope="col">Position</th>
													<th scope="col">Actions</th>
												  </tr>
												</thead>
												<tbody>
												  <tr>
													<td>Manuel G. Ong</td>
													<td>Chairman</td>
													<td>
													  <button type="button" class="btn btn-info">Edit</button>
													  
													</td>
												  </tr>
												  <tr>
													<td>Delfin S. Castro</td>
													<td>Member</td>
													<td>
													  <button type="button" class="btn btn-info">Edit</button>
													  
													</td>
												 </tr>
												</tbody>
											  </table>
		
		
		  
		  
		  <button className="btn btn-success" >Update</button>
          	</div>

			</div>								
		</div>
										
           </div> </div></div>



        </members>
        );
    }
}
export default Members;