<script>
  import "../app.css";
</script>
<header class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <nav class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <a class="btn btn-ghost normal-case text-xl" href="/">Baskin Simulator</a>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a href="/calculator">Calculator</a></li>
          <li><a href="/single-play">Single Play</a></li>
        </ul>
      </div>
    </nav>
    <!-- Page content here -->
    <slot />
  </div> 
  <nav class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100">
      <!-- Sidebar content here -->
        <li><a href="/calculator">Calculator</a></li>
        <li><a href="/single-play">Single Play</a></li>
    </ul>
  </nav>
</header>