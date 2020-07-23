<template>
<!--  BEGIN SIDEBAR  -->
<div class="sidebar-wrapper sidebar-theme">

    <nav id="compactSidebar">

        <div class="theme-logo">
            <a href="/dashboard">
                <img src="@/assets/logo.png" class="navbar-logo" alt="logo">
            </a>
        </div>

        <ul class="menu-categories">
            <router-link tag="li" active-class="active" to="/dashboard" class="menu" exact>
                <a href="/dashboard" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Dasboard</span></div>
            </router-link>

            <router-link v-if="user.role_id == 1" to="/dashboard/affiliates" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Affiliates</span></div>
            </router-link>
            <router-link v-if="user.role_id == 1" to="/dashboard/users" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Users</span></div>
            </router-link>

<!--            <router-link  v-if="user.role_id == 1" to="/dashboard/matrix" tag="li" active-class="active" class="menu">-->
<!--                <a href="#app" data-active="false" class="menu-toggle">-->
<!--                    <div class="base-menu">-->
<!--                        <div class="base-icons">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </a>-->
<!--                <div class="tooltip"><span>The Matrix</span></div>-->
<!--            </router-link>-->
            <router-link to="/dashboard/wallet" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Wallet</span></div>
            </router-link>

            <router-link to="/dashboard/ebook" tag="li" active-class="active" class="menu">
                <a href="#app" data-active="false" class="menu-toggle">
                    <div class="base-menu">
                        <div class="base-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        </div>
                    </div>
                </a>
                <div class="tooltip"><span>Ebook</span></div>
            </router-link>
        </ul>

<!--        <div class="external-links">-->
<!--            <a href="../../documentation/index.html" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>-->
<!--                <div class="tooltip"><span>Documentation</span></div>-->
<!--            </a>-->
<!--        </div>-->
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

            <ul class="submenu-list" data-parent-element="#dashboard">
                <li>
                    <a href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="24"
                             height="24"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-grid">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect></svg> Submenu 1
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> Submenu 2 </a>
                </li>
            </ul>
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
    export default  {
        props:['user'],
        data() {
            return {
                name: 'SiderBar Component'
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