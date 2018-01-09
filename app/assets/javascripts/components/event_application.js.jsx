var EventApplication = React.createClass({
	render: function() {
		return(
			<div className="container">
			  <div className="jumbotron">
				<h1>Event Planner</h1>
				<p>Chef Del Catering Events</p>
			  </div>
			<div className="row">
			  <div className="col-md-12">
				 <EventTable />
			  </div>
			 </div>
			</div>
		)
	}
});