<template>
  <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',height:'88px'}">
    <!--头像-->
    <Space size="large" wrap style="margin-top: 10px;margin-right: 2%;float: right">
      <Avatar style="color: blue;background-color: yellow">admin</Avatar>
    </Space>
    <!--消息通知-->
    <Notification
        auto-count
        @on-load-more="handleLoadMore"
        @on-clear="handleClear"
        style="margin-right: 2%;margin-top: 15px;float: right"
    >
      <NotificationTab
          title="通知"
          name="message"
          :count="unreadMessage"
          :loading="messageLoading"
      >
        <NotificationItem
            v-for="(item, index) in messageList"
            :key="index"
            :title="item.title"
            :icon="item.icon"
            :icon-color="item.iconColor"
            :time="item.time"
            :read="item.read"
        />
      </NotificationTab>
    </Notification>
  </Header>
  <!--面包屑-->
  <Breadcrumb style="height: 33px;font-size: 20px;margin-top: 10px;margin-left: 2%">
    <BreadcrumbItem to="/">Home</BreadcrumbItem>
    <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
    <BreadcrumbItem>当前页</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  data () {
    return {
      messageBaseList: [
        {
          icon: 'md-mail',
          iconColor: '#3391e5',
          title: '蒂姆·库克回复了你的邮件',
          read: 0,
          time: 1557297198
        },
      ],
      messageList: [],
      messageLoading: false,
    }
  },
  computed: {
    unreadMessage () {
      let unread = 0;
      this.messageList.forEach(item => {
        if (!item.read) unread++;
      });
      return unread;
    }
  },
  methods: {
    handleLoadMore (tab) {
      this.loadMore(tab.name);
    },
    loadMore (type) {
      if (this[type + 'Loading']) return;
      this[type + 'Loading'] = true;
      setTimeout(() => {
        this[type + 'List'] = this[type + 'List'].concat([...this[type + 'BaseList']]);
        this[type + 'Loading'] = false;
      }, 1000);
    },
    handleClear (tab) {
      this.clearUnread(tab.name);
    },
    clearUnread (type) {
      this[type + 'List'] = this[type + 'List'].map(item => {
        item.read = 1;
        return item;
      });
    }
  },
  mounted () {
    this.messageList = [...this.messageBaseList];
  }
}
</script>

<style scoped>
.demo-extra-img img{
  width: 100%;
  border-radius: 6px;
}
@media screen and (max-width: 768px) {
  .demo-extra-img img{
    width: 100%;
  }
}
</style>