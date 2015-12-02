// -------------------------------------------------------------------
var _DIR = {
	"images" : "images/"
}
var _APP = {
	"title" : "Créer avec React"
}
var _ASSET = {
	"main_logo" : _DIR["images"] + "logo.png",
	"main_logo_alt" : "reactJs_banner",

	"background" : _DIR["images"] + "bg_filter.jpg",
	"background_alt" : "background_img",

	"apple_logo" : _DIR["images"] + "apple.png",
	"play_logo" : _DIR["images"] + "play.png"
};
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
class InlineList extends React.Component {
	render() {
		return (
			<div></div>
		);
	}
}
// -------------------------------------------------------------------
class Logo extends React.Component {
	render() {
		var src = _ASSET["main_logo"];
		if (this.props.src){
			src = this.props.src;
		}
		
		return (
			<div>
				<img src={src} alt={this.props.alt} className="img-responsive"/>
			</div>
		);
	}
}
// -------------------------------------------------------------------
// const navbarInstance = (

// );
// -------------------------------------------------------------------
class Menu extends React.Component {
	render() {
		return (
			<div>
			  <ReactBootstrap.Navbar fixedTop className={"alert-warning"}>
			    <ReactBootstrap.Navbar.Header>
			      <ReactBootstrap.Navbar.Brand>
			        <a href="/">{_APP["title"]}</a>
			        {/* <a href="#"><Logo src={_ASSET["main_logo"]} alt={_ASSET["main_logo_alt"]}></Logo></a> */} 
			      </ReactBootstrap.Navbar.Brand>
			      <ReactBootstrap.Navbar.Toggle />
			    </ReactBootstrap.Navbar.Header>
			    <ReactBootstrap.Navbar.Collapse>
			    {/* 
			      <ReactBootstrap.Nav>
			        <ReactBootstrap.NavItem eventKey={1} href="#">Link</ReactBootstrap.NavItem>
			        <ReactBootstrap.NavItem eventKey={2} href="#">Link</ReactBootstrap.NavItem>
			        <ReactBootstrap.NavDropdown eventKey={3} title="Dropdown" id="basic-ReactBootstrap.Nav-dropdown">
			          <ReactBootstrap.MenuItem eventKey={3.1}>Action</ReactBootstrap.MenuItem>
			          <ReactBootstrap.MenuItem eventKey={3.2}>Another action</ReactBootstrap.MenuItem>
			          <ReactBootstrap.MenuItem eventKey={3.3}>Something else here</ReactBootstrap.MenuItem>
			          <ReactBootstrap.MenuItem divider />
			          <ReactBootstrap.MenuItem eventKey={3.3}>Separated link</ReactBootstrap.MenuItem>
			        </ReactBootstrap.NavDropdown>
			      </ReactBootstrap.Nav>
			      */}  
			      <ReactBootstrap.Nav pullRight>
			        <ReactBootstrap.NavItem eventKey={1} href="/articles">Articles</ReactBootstrap.NavItem>
			        <ReactBootstrap.NavItem eventKey={2} href="/tutoriel">Tutoriel</ReactBootstrap.NavItem>
			        <ReactBootstrap.NavItem eventKey={3} href="/">About</ReactBootstrap.NavItem>
			      </ReactBootstrap.Nav>
			    </ReactBootstrap.Navbar.Collapse>
			  </ReactBootstrap.Navbar>
			</div>
		);
	}
}
// -------------------------------------------------------------------
class AppHeader extends React.Component {
	render() {
		return (
			<Menu></Menu>
		);
	}
}
// ===================================================================
// -------------------------------------------------------------------
// ===================================================================
const MainInput = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  validationState() {
    let length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  },

  render() {
    return (
      <ReactBootstrap.Input
        type="text"
        value={this.state.value}
        placeholder="Ingredients"
        label=""
        help="Dont drop me, Cook me :)"
        bsStyle={this.validationState()}
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        bsSize="large"
        onChange={this.handleChange} />
    );
  }
});
// -------------------------------------------------------------------
class MagnetApple extends React.Component {
	render() {
		var _styleIMG = {
			display: "inline-block",
			float: "left",
			padding: "0",
			margin: "0"
		};
		var _styleP = {
			fontSize : "11px",
			fontWeight : "400",
			margin: "0",
    		padding: "0",
    		marginBottom: "-10px",
    		marginTop: "10px",
    		letterSpacing : "1px",
    		lineHeight : "31px"
		};
		var _styleH6 = {
			fontSize : "20px",
			fontWeight: "700",
			margin: "0",
			padding: "0"
		};
		return (
			<div>
			<a href="#" id="appleMagnet" className="btn btn-lg" disabled>
				<img style={_styleIMG} src={_ASSET["apple_logo"]} alt="apple"/>
				<p style={_styleP}>DOWNLOAD FROM</p>
				<h6 style={_styleH6}>APPLE STORE</h6>
			</a>
			</div>
		);
	}
}
// -------------------------------------------------------------------
class MagnetPlay extends React.Component {
	render() {
		var _styleIMG = {
			display: "inline-block",
			float: "right",
			padding: "0",
			margin: "0"
		};
		var _styleP = {
			fontSize : "11px",
			fontWeight : "400",
			margin: "0",
    		padding: "0",
    		marginBottom: "-10px",
    		marginTop: "10px",
    		letterSpacing : "1px",
    		lineHeight : "31px"
		};
		var _styleH6 = {
			fontSize : "20px",
			fontWeight: "700",
			margin: "0",
			padding: "0"
		};
		return (
			<div>
			<a href="#" id="playMagnet" className="btn btn-lg" disabled>
				<img style={_styleIMG} src={_ASSET["play_logo"]} alt="play"/>
				<p style={_styleP}>DOWNLOAD FROM</p>
				<h6 style={_styleH6}>APPLE STORE</h6>
			</a>
			</div>
		);
	}
}
// -------------------------------------------------------------------
// -------------------------------------------------------------------
class AppBody extends React.Component {
	render() {
		// var full = " position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1;"
		var _styleBG = {
			position : "fixed",
			top : "0px",
			bottom : "0px",
			left : "0px",
			right : "0px",
			width : "100%",
			height : "100%",
			border : "none",
			margin : "0",
			padding : "0",
			
			overflow : "hidden"
		};
		var _styleMask = {
			opacity: "0.5",
			width : "100%",
			height : "100%",
			background : "red"
		};
		return (
				<div style={_styleBG}>

					<div style={{margin : "25%"}}>
						{/*<MainInput id="search"></MainInput>
						<MagnetApple/>
						<MagnetPlay/>*/}
					</div>
				{/*	<div style={_styleMask}></div>
				
				<ReactBootstrap.Grid>
			    <ReactBootstrap.Row className="show-grid">
			      <ReactBootstrap.Col xs={12} md={8}></ReactBootstrap.Col>
			      <ReactBootstrap.Col xs={6} md={4}><code>&lt;{'ReactBootstrap.Col xs={6} md={4}'} /&gt;</code></ReactBootstrap.Col>
			    </ReactBootstrap.Row>

			    <ReactBootstrap.Row className="show-grid">
			      <ReactBootstrap.Col xs={6} md={4}></ReactBootstrap.Col>
			      <ReactBootstrap.Col xs={6} md={4}><code>&lt;{'ReactBootstrap.Col xs={6} md={4}'} /&gt;</code></ReactBootstrap.Col>
			      <ReactBootstrap.Col xs={6} md={4}><code>&lt;{'ReactBootstrap.Col xs={6} md={4}'} /&gt;</code></ReactBootstrap.Col>
			    </ReactBootstrap.Row>

			    <ReactBootstrap.Row className="show-grid">
			      <ReactBootstrap.Col xs={6} xsOffset={6}><ExampleInput className="text-center"></ExampleInput></ReactBootstrap.Col>
			    </ReactBootstrap.Row>

			    <ReactBootstrap.Row className="show-grid">
			      <ReactBootstrap.Col md={6} mdPush={6}><code>&lt;{'ReactBootstrap.Col md={6} mdPush={6}'} /&gt;</code></ReactBootstrap.Col>
			      <ReactBootstrap.Col md={6} mdPull={6}><code>&lt;{'ReactBootstrap.Col md={6} mdPull={6}'} /&gt;</code></ReactBootstrap.Col>
			    </ReactBootstrap.Row>
			 </ReactBootstrap.Grid>
				*/}
				
			</div>

		);
	}
}

// ===================================================================
// -------------------------------------------------------------------
// ===================================================================

// -------------------------------------------------------------------
class Footer extends React.Component {
	render() {
		var _styleFoo = {
			position : "fixed",
			bottom : "0px",
			left : "0px",
			right : "0px",
			textAlign : "center",
			paddingTop : "10px"
		};
		var _styleP = {
			display : "inline-block",
			paddingRight : "10px"
		};
		return (
			<div>

				<section className="main-footer alert-warning" style={_styleFoo}>
				<div className="container">
					<p style={_styleP}> Fait avec <a href="https://facebook.github.io/react/" target="_blank">♥</a>  </p>
					<a style={_styleP} href="#" className="up"><ReactBootstrap.Glyphicon glyph="home" /></a>
					<p style={_styleP}>Inspiré de <a href="http://buildwithreact.com/" target="_blank">buildwithreact.com</a></p>				
				</div>
				</section>

			</div>
		);
	}
}

// -------------------------------------------------------------------
// -------------------------------------------------------------------
class AppFooter extends React.Component {
	render() {
		return (
			<div>
			<Footer/>

			</div>
		);
	}
}
// -------------------------------------------------------------------
// -------------------------------------------------------------------
class App extends React.Component {
	render() {
		return (
			<div>
				<AppHeader></AppHeader>
				<AppBody></AppBody>
				<AppFooter></AppFooter>
			</div>
		);
	}
}
// -------------------------------------------------------------------
ReactDOM.render(<App></App>,document.getElementById('app'));