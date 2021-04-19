import React from "react";
import '../App.css'
class Home extends React.Component {

    render()  {
        return(
            <home style={{textAlign:  'left'}}>
            <div className="navbar navbar-default navbar-fixed-top">
			<div className="brand">
      <a href="index.html" ><h2>GEOGRACE ADMIN</h2></a>
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
        9
            </div>
           


            <div id="wrapper">
    <div id="sidebar-nav" className="sidebar">
				<div className="sidebar-scroll">
					<nav>
						<ul className="nav">
							<li><a href="/" ><i className="lnr lnr-briefcase"></i> <span>Dashboard</span></a></li>
							<li><a href="/home" className="active"><i className="lnr lnr-home"></i> <span>Home</span></a></li>
							<li><a href="/investor-relations"><i className="lnr lnr-heart"></i> <span>Investor Relations</span></a></li>
							<li><a href="/members"><i className="lnr lnr-users"></i> <span>Members</span></a></li>
							<li><a href="/downloadables"><i className="lnr lnr-download"></i> <span>Downloadables</span></a></li>	
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
						<li className="active">Home</li>
					</ol>
				</div>
				
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">HOME</h1>
					</div>
				</div>
				
				<div className="row">
					<div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>Our Business</h3></div>
							<div className="panel-body" >
								<textarea name="content">
									Geograce Resources Philippines, Inc. was incorporated as La Suerte Gold Mining Corporation on 20 April 1974 primarily to engage in the exploration, exploitation, and development of mineral resources, and to purchase, lease, and otherwise acquire mining claims and concessions where in the Philippines, and to carry on the business of mining, extracting, smelting, treating, and otherwise producing and dealing in metals and minerals of all kinds including all its products and by-products.
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info" >Publish</button>
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
</div>
<div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">BUSINESS PROFILE</h1>
					</div>
				

				
				
					<div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>Global Equities, Inc.</h3></div>
							<div className="panel-body" >
								<textarea name="content2">
									On 16 May 1995, the stockholders approved the realignment of the Company’s main business activities from that of a mining company to that of an investment holding company. The corporate name of “La Suerte Gold Mining Corporation” was renamed as “Global Equities, Inc.” As a holding company, it invested in and/or managed companies engaged in the manufacture of absorbent cotton, personal care products and in the provision of specialized corporate facilities for end-users.
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info" >Publish</button>
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
            </div></div>
			
					<div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>Articles of Incorporation</h3></div>
							<div className="panel-body" >
								<textarea>
									On 20 December 2013, the stockholders approved the following amendments to the Company’s Articles of Incorporation:

									• Amendment of Article II – changing the Company’s primary purpose from a mining company into a holding company.
									
									• Amendment of Article VI – reducing the number of directors from eleven (11) directors to seven (7) directors.
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info"  >Publish</button>
								
							
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
            </div></div>
           </div> 
		   <div className="row">
					<div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>More possible investments</h3></div>
							<div className="panel-body" >
								<textarea name="content4">
									The foregoing amendments in the Company’s Articles of Incorporation were approved by the SEC on 20 February 2014.

									In line with its new primary purpose, the Company will be on the continuous lookout for possible investments in other areas of interest while maintaining some of its mining tenements.
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info"  >Publish</button>
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
            </div></div>
           </div> 
		   <div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">MISSION, VISSION, CORE VALUES</h1>
					</div>
				

				
				
					<div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>Company Mission</h3></div>
							<div className="panel-body" >
								<textarea name="content2">
								To deliver investment opportunities, generate valued returns to our stakeholders through commitment to excellence								</textarea>	
								<br />
								<button className="btn btn-lg btn-info" >Publish</button>
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
							<button className="btn btn-sm btn-info"   style={{float:  'right'}}>Publish</button>
						</div>
            </div></div>
			
					<div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>Company Vision</h3></div>
							<div className="panel-body" >
								<textarea name="content3">
								To deliver investment opportunities, generate valued returns to our stakeholders through commitment to excellence
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info">Publish</button>
								
							
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
            </div></div>
           </div> 
		   <div className="row">
					<div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>Core Values</h3></div>
							<div className="panel-body" >
								<textarea name="content4">
								To deliver investment opportunities, generate valued returns to our stakeholders through commitment to excellence
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info" >Publish</button>
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
            </div></div>
           </div> 

					
</div>
</div>
        </home>
        );
    }
}
export default Home;