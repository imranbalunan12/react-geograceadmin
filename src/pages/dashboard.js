import React from "react";
import '../App.css'
class Dashboard extends React.Component {

    render()  {
        return(
            <dashboard style={{textAlign:  'left'}}>
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
                                <li><a href="/" className="active"><i className="lnr lnr-briefcase"></i> <span>Dashboard</span></a></li>
                                <li><a href="/home"><i className="lnr lnr-home"></i> <span>Home</span></a></li>
                                <li><a href="/investor-relations"><i className="lnr lnr-heart"></i> <span>Investor Relations</span></a></li>
                                <li><a href="/members"><i className="lnr lnr-users"></i> <span>Members</span></a></li>
                                <li><a href="/downloadables"><i className="lnr lnr-download"></i> <span>Downloadables</span></a></li>
                                
                            
                                    
                                        
                            </ul>
                        </nav>
                    </div>
                </div>
           
            <div className="main">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="panel panel-default ">
                                <div className="panel-heading">
                                    <div>
                                    <h3>Activity Timeline</h3>
                                    
                                
                                    
                                    </div>
                                    
                                </div>
                                    <div className="panel-body timeline-container">
                                    <ul className="timeline" style={{textAlign:  'left'}}>
                                        <li>
                                            <div className="timeline-badge"><em className="glyphicon glyphicon-home"></em></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Updated last Tuesday</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Home page was edited last Tuesday by our web developer Juan Dela Cruz</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge primary"><em className="glyphicon glyphicon-download"></em></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Updated 3 days ago</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge"><em className="glyphicon glyphicon-camera"></em></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Updated 3 days ago</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sodales nisl. Donec malesuada orci ornare risus finibus feugiat.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge"><em className="glyphicon glyphicon-paperclip"></em></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Updated 4 days ago</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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
                                     <br/>
                                     <div>
                                         <span><em className="fa fa-calendar-check-o">&nbsp;</em>Published: Immediately</span>&nbsp;<a href="#" style={{color:  'blue'}} >edit</a>
                                         <button className="btn btn-sm btn-info"  style={{float:  'right'}}>Publish</button>
                                    </div>
                                   
                                </div>
                    
                   </div> 
        </div>
           
        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-heading"><h3>Header List</h3></div>
                                <div className="panel-body">
                                <div>
                                <span><em className="fa fa-home">&nbsp;</em>Home</span>&nbsp; <button className="btn btn-sm btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}} >Edit</button><br /><br />
                                <span><em className="fa fa-line-chart">&nbsp;</em>Investor Relation</span>&nbsp; <button className="btn btn-sm btn-danger" style={{float:  'right'}} >Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}}  >Edit</button><br /><br />
                                <span><em className="fa fa-users">&nbsp;</em>Team</span>&nbsp; <button className="btn btn-sm btn-danger" style={{float:  'right'}} >Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}} >Edit</button><br /><br />
                                <span><em className="fa fa-download">&nbsp;</em>Downloadables</span>&nbsp; <button className="btn btn-sm btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}} >Edit</button><br /><br />			
                                <span><em className="fa fa-phone">&nbsp;</em>Contact</span>&nbsp;  <button className="btn btn-sm btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}} >Edit </button><br /><br />	
                                <br />	
                                        <div style={{textAlign:  'left'}}>
                
                                                <button className="btn btn-sm btn-info"  >Publish </button> <button className="btn btn-sm btn-success" >&nbsp;&nbsp;Add new&nbsp;&nbsp;</button>
                                        
                                        </div>
                                </div>
                    
                   </div> 
        </div>
        </div>
        </div>
        </div>
        </div>
        </dashboard>
        );
    }
}
export default Dashboard;