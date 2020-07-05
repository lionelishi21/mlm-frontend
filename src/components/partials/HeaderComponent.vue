<template>
<!-- start: header -->
			<header class="header">
				<div class="logo-container">
					<a href="/" class="logo">
						<img src="@/assets/logo.png" width="75" alt="Porto Admin" />
					</a>
					<div class="d-md-none toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
						<i class="fas fa-bars" aria-label="Toggle sidebar"></i>
					</div>
				</div>
			
				<!-- start: search & user box -->
				<div class="header-right">
			
					<span class="separator"></span>
					<span class="separator"></span>
			
					<div id="userbox" class="userbox">
						<a href="#" data-toggle="dropdown">
							<figure class="profile-picture">
								<img src="@/assets/img/logged-user.jpg" alt="Joseph Doe" class="rounded-circle" data-lock-picture="@/assets/img/logged-user.jpg" />
							</figure>
							<div class="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
								<span class="name">{{user.first_name}}</span>
								<span class="role" v-if="user.role_id == 1">administrator</span>
								<span class="role" v-else >Affiliate</span>
							</div>
			
							<i class="fa custom-caret"></i>
						</a>
			
						<div class="dropdown-menu">
							<ul class="list-unstyled mb-2">
								<li class="divider"></li>
								<router-link to="/dashboard/profile" tag="li">
									<a role="menuitem" tabindex="-1" href="pages-user-profile.html"><i class="fas fa-user"></i> My Profile</a>
								</router-link>
								<li>
									<a @click="logOut()" role="menuitem" tabindex="-1" href="#"><i class="fas fa-power-off"></i> Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- end: search & user box -->
			</header>
			<!-- end: header -->
<!-- end: header -->
</template>
<script>
export default {
	data() {
		return{
			title: 'Header Component'
		}
	},
	props:['user'],
    methods: {
    	logOut: function() {
    		this.$store.dispatch('AUTH_LOGOUT')
    			.then( response => {
    				this.$router.push('/')
    			})
    	}
    }
}
</script>