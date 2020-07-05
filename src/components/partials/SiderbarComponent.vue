<template>
<!-- start: sidebar -->
<aside id="sidebar-left" class="sidebar-left">

    <div class="sidebar-header">
        <div class="sidebar-title">
            Navigation
        </div>
        <div  class="sidebar-toggle d-none d-md-block" 
              data-toggle-class="sidebar-left-collapsed" 
              data-target="html" 
              data-fire-event="sidebar-left-toggle">
            <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
        </div>
    </div>

    <div class="nano">
        <div class="nano-content">
            <nav id="menu" class="nav-main" role="navigation">
            
                <ul class="nav nav-main">
                    <li>
                        <router-link to="/dashboard" active-class="active" tag="a" class="nav-link">
                            <i class="fas fa-home" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </router-link>                        
                    </li>

                     <li v-if="user.role_id == 1">
                        <router-link tag="a" to="/dashboard/affiliates" class="nav-link">
                            <i class="fas fa-users" aria-hidden="true"></i>
                            <span>Affiliates</span>
                        </router-link>                        
                    </li>
                    <li>
                        <router-link  tag="a" to="/dashboard/wallet" class="nav-link" >
                          	<i class="fas fa-dollar-sign"></i>
                            <span>Wallet</span>
                        </router-link>                        
                    </li>
                    <li>
                        <a class="nav-link" href="layouts-default.html">
                            <i class="fas fa-book" aria-hidden="true"></i>
                            <span>Ebooks</span>
                        </a>                        
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</aside>
<!-- end: sidebar -->
</template>
<script>
    export default  {
        props:['user'],
        data() {
            return {
                name: 'SiderBar Component'
            }
        }
    }
</script>