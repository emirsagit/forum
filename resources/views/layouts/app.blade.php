<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script type="application/javascript">
        window.App = {!! json_encode([
            'signedIn' => Auth::check(),
            'user' => Auth::user(),
            'isAdmin' => Auth::user() ? Auth::user()->isAdmin() : false
      ]) !!}      
    </script>
    {!! SEO::generate(true) !!}
    @yield('head')
</head>

<body class="min-h-screen">
    <div id="app" class="bg-gray-100 relative leading-relaxed">
        @include('layouts.nav')
        @yield('content')
        <signin :login="control.login"></signin>
        <register :register="control.register"></register>
        @if($setting)
        <footer-field :setting="{{ $setting }}"></footer-field>
        @endif
        <flash flashing="{{ session('message') }}"></flash>
    </div>
    <!-- Scripts -->
    <script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>