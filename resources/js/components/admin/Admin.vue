<script>
import AdminSidebar from './local/AdminSidebar'
import Channels from './channels/Channels'
import AdminThreads from './threads/AdminThreads'
import AdminBlogs from './blogs/AdminBlogs'
import AdminUsers from './users/AdminUsers'
import AdminSettings from './settings/AdminSettings'
    export default {
        components: {
            AdminSidebar,
            Channels,
            AdminThreads,
            AdminBlogs,
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
