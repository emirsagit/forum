<script>
import AdminSidebar from './local/AdminSidebar'
import Channels from './channels/Channels'
import AdminThreads from './threads/AdminThreads'
import AdminUsers from './users/AdminUsers'
import AdminSettings from './settings/AdminSettings'
    export default {
        components: {
            AdminSidebar,
            Channels,
            AdminThreads,
            AdminUsers,
            AdminSettings
        },
        data() {
            return {
                hide: false
            }
        },
    }
</script>
