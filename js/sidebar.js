document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn');
    var sidebar = document.getElementById('sidebar');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        
        // 如果侧边栏处于激活状态，则隐藏按钮；否则显示按钮
        if (sidebar.classList.contains('active')) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'block';
        }
    }

    btn.addEventListener('click', toggleSidebar);

    document.addEventListener('click', function(event) {
        var isClickInsideSidebar = sidebar.contains(event.target);
        var isClickInsideBtn = btn.contains(event.target);

        if (!isClickInsideSidebar && !isClickInsideBtn) {
            sidebar.classList.remove('active');
            btn.style.display = 'block';
        }
    });
});
