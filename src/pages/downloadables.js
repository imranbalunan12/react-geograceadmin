import React from "react";


class Downloadables extends React.Component {

    render()  {
        return(
            <downloadables style={{textAlign:  'left'}}>
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
							<li><a href="/" ><i className="lnr lnr-briefcase"></i> <span>Dashboard</span></a></li>
							<li><a href="/home" ><i className="lnr lnr-home"></i> <span>Home</span></a></li>
							<li><a href="/investor-relations"><i className="lnr lnr-heart"></i> <span>Investor Relations</span></a></li>
							<li><a href="/members"><i className="lnr lnr-users"></i> <span>Members</span></a></li>
							<li><a href="/downloadables" className="active"><i className="lnr lnr-download"></i> <span>Downloadables</span></a></li>	
						</ul>
					</nav>
				</div>
			</div>
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
			<div className="row">
				<ol className="breadcrumb">
					<li><a href="#">
						<em className="fa fa-download"></em>
					</a></li>
					<li className="active">Downloadables</li>
				</ol>
			</div>
			
			<div className="row">
				<div className="col-lg-12">
					<h1 className="page-header">DOWNLOADABLE PAGE</h1>
				</div>
			</div>
            <div className="row">
				<div className="col-lg-12">
				</div>
				<div className="col-lg-8">
					<div className="panel panel-default">
						<div className="panel-heading"><h3 style={{color: '#3333cc'}}>Downloadable List</h3></div>
						<div className="panel-body" >
							<div style={{display: 'flex', fontFamily: 'roboto', color: '#666666'}}>
								<input className="form-control" style={{marginRight: '1em'}} placeholder="Corporate Disclosure"/>
								<button className="btn btn-md btn-info" style={{marginRight: '1em'}}>Edit</button>
								<button className="btn btn-md btn-danger">Remove</button>
							</div>	
							<br/>
							<div style={{display: 'flex', fontFamily: 'roboto', color: '#666666'}}>
								<input className="form-control" style={{marginRight: '1em'}} placeholder="Company Disclosure"/>
								<button className="btn btn-md btn-info" style={{marginRight: '1em'}}>Edit</button>
								<button className="btn btn-md btn-danger">Remove</button>
							</div>
							<br/>
							<div style={{display: 'flex', fontFamily: 'roboto', color: '#666666'}}>
								<input className="form-control" style={{marginRight: '1em'}} placeholder="Others"/>
								<button className="btn btn-md btn-info" style={{marginRight: '1em'}}>Edit</button>
								<button className="btn btn-md btn-danger">Remove</button>
							</div>
							<br/>
							<button className="btn btn-md btn-info" >Add new list</button>	
						</div>
						<br/>
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
								 <span><em className="fa fa-eye">&nbsp;</em>Visibility: Public</span>&nbsp;<a href="#" style={{color:  'blue'}} >Edit</a>
								 
							 </div>
							 <div>
								 <span><em className="fa fa-calendar-check-o">&nbsp;</em>Published: Immediately</span>&nbsp;<a href="#" style={{color:  'blue'}} >Edit</a>
								
							</div>
							<button className="btn btn-sm btn-info"  style={{float:  'right'}}>Publish</button>
						</div>
            </div></div>
            <br/>
				<br/>
			
		
				<div className="col-lg-12">
					<div className="panel panel-info">
						<div className="panel-heading"><h3>Corporate Government Panel</h3></div>
						<div className="panel-body">
							
							
							<br/>
							<div className="container">
                                
								<div className="table">
								  <div className="col-4"><label>Manual on Corporate Governance</label>
									<table className="table table-bordered">
                                    
									  <thead>
										  
										<tr>
										  <th >Download Link</th>
										  <th >Content</th>
										  <th >Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>
                               
                               
                                <br /> <br /> <br />
<label>Code of Business Conduct and Ethics</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
										
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>

                                <br /> <br /> <br />
<label>Annual Corporate Governance Report</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>
                                <br /> <br /> <br />
<label>Board Committees</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  
										  
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>
                                <br /> <br /> <br />
<label>Corporate Social Responsibility</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
										
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>
                                <br /> <br /> <br />
<label>Enterprise Risk Management</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
										
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>
                                <br /> <br /> <br />
<label>Company Policies</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>

</div>
</div>
</div>
<div className="col-lg-14">
					<div className="panel panel-info">
						<div className="panel-heading"><h3>Company Disclosure Panel</h3></div>
						<div className="panel-body">
							
							<br/>
							<div className="container">

								<label>Sec Filings</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>

<br/><br/><br/>
<label>Notice of Annual or Special Stockholder's Meetings</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>

                                <br/><br/><br/>
<label>Minutes of All General or Special Stockholder's Meeting</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
                                          <tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">Edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>
                                </div>
</div>
</div>
<div className="col-lg-14">
					<div className="panel panel-info">
						<div className="panel-heading"><h3>Others Panel</h3></div>
						<div className="panel-body">
							
							<br/>
							<div className="container">

								<label>Others</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">Edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										  
										  
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{marginRight: '2em'}} >Add row</button>
								<button className="btn btn-md btn-danger"  >Delete row</button>


</div>

</div>
</div></div></div></div></div></div>
</div>
        </downloadables>
        );
    }
}
export default Downloadables;