<template>
<!--  BEGIN SIDEBAR  -->
<div class="sidebar-wrapper sidebar-theme" v-click-outside="hide" >
    <nav id="compactSidebar" ref="compactSidebar" >

        <div class="">
            <a href="/dashboard">
                <img src="@/assets/logo.png" alt="logo" style="width: 100%;">
            </a>
        </div>

        <ul class="menu-categories">

            <router-link tag="li" active-class="active" to="/dashboard/admin-dashboard" class="menu" exact>
                <a href="/dashboard/admin-dashboard" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <i class="text-white fa fa-chart-line fa-1x" width="24" height="24"></i>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Analytics</span></div>
            </router-link>

            <router-link tag="li" active-class="active" to="/dashboard" class="menu" exact>
                <a href="/dashboard" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <i class="text-white fa fa-home fa-1x" width="24" height="24"></i>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Dasboard</span></div>
            </router-link>

            <router-link v-if="user.role_id == 1" to="/dashboard/affiliates" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <i class="text-white fa fa-users fa-1x" width="24" height="24"></i>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Affiliates</span></div>
            </router-link>
            <router-link v-if="user.role_id == 1" to="/dashboard/users" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <i class="text-white fa fa-user fa-1x" width="24" height="24"></i>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Users</span></div>
            </router-link>

            <router-link to="/dashboard/wallet" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <i class="fa-1x text-white fa fa-wallet" aria-hidden="true" width="24" height="24"></i>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Wallet</span></div>
            </router-link>

            <router-link to="/dashboard/ebook" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <i class="fa-1x text-white fa fa-book" aria-hidden="true" width="24" height="24"></i>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Ebook</span></div>
            </router-link>

            <router-link v-if="user.role_id == 1" to="/dashboard/accounts" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <i class="fa-1x text-white fa fa-book" aria-hidden="true" width="24" height="24"></i>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Accounts</span></div>
            </router-link>

            <router-link to="/dashboard/settings" tag="li" active-class="active" class="menu">
                <a href="#" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <i class="text-white fa fa-cogs fa-1x" width="24" height="24"></i>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Settings</span></div>
            </router-link>
        </ul>
    </nav>
    <div id="compact_submenuSidebar" class="submenu-sidebar">

        <div class="theme-brand-name">
            <a href="index.html">Cork</a>
        </div>

        <div class="submenu" id="dashboard">
            <div class="category-info">
                <h5>Menu 1</h5>
                <p>This menu consist of Different Icons.</p>
            </div>
        </div>

        <div class="submenu" id="app">
            <div class="category-info">
                <h5>Menu 2</h5>
                <p>This menu consist of Same Icons.</p>
            </div>
            <ul class="submenu-list" data-parent-element="#app">
                <li>
                    <a href="javascript:void(0)"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Submenu 1 </a>
                </li>
                <li>
                    <a href="javascript:void(0)"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Submenu 2 </a>
                </li>
            </ul>
        </div>

        <div class="submenu" id="users">
            <div class="category-info">
                <h5>Menu 3</h5>
                <p>This menu consist of Sub-Sub category.</p>
            </div>
            <ul class="submenu-list" data-parent-element="#users">
                <li>
                    <a href="javascript:void(0)"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Submenu 1 </a>
                </li>
                <li>
                    <a href="javascript:void(0)"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Submenu 2 </a>
                </li>
                <li class="sub-submenu">
                    <a role="menu" class="collapsed" data-toggle="collapse" data-target="#starter-kit" aria-expanded="false"><div><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Submenu 3 </div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
                    <ul id="starter-kit" class="collapse" data-parent="#compact_submenuSidebar">
                        <li>
                            <a href="javascript:void(0);"> Sub Submenu 1 </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"> Sub Submenu 2 </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"> Sub Submenu 2 </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="submenu" id="more">
            <div class="category-info">
                <h5>Starter Kit</h5>
                <p>With starter kit, you can begin your work without any hassle.</p>
            </div>
            <ul class="submenu-list" data-parent-element="#more">
                <li class="active">
                    <a href="starter_kit_blank_page.html"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Blank Page </a>
                </li>
                <li>
                    <a href="starter_kit_breadcrumb.html"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Breadcrumb </a>
                </li>
                <li>
                    <a href="starter_kit_boxed.html"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Boxed </a>
                </li>
            </ul>
        </div>

    </div>
</div>
<!--  END SIDEBAR  -->
</template>
<script>
    import ClickOutside from 'vue-click-outside'
    export default  {
        props:['user'],
        data() {
            return {
                name: 'SiderBar Component'
            }
        },

        directives: {
            ClickOutside
        },
        methods: {

            hide() {
                $(".main-container").removeClass('sbar-open')
            }
        }
    }
</script>
<style>
    #compactSidebar {
        background: #2e3131 !important;
    }

    .theme-logo {
        padding: 1px;
    }
</style>