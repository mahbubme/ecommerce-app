<template>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <router-link to="/" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Products</a></router-link>
                <router-link to="/about" activeClass="active" tag="li" class="nav-item"><a class="nav-link">About</a></router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>