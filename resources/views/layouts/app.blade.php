<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script type="application/javascript">
        window.App = {!! json_encode([
            'signedIn' => Auth::check(),
            'user' => Auth::user(),
      ]) !!}      
    </script>
    @yield('head')
</head>

<body>
    <div id="app">
        @include('layouts.nav')
        @yield('content')
        <signin :login="control.login"></signin>
        <register :register="control.register"></register>
        <flash flashing="{{ session('message') }}"></flash>
    </div>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer type="application/javascript"></script>
</body>

</html>