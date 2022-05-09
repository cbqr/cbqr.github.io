(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{575:function(a,t,s){a.exports=s.p+"assets/img/collection.44e5b562.png"},587:function(a,t,s){"use strict";s.r(t);var e=s(15),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"collection-家族总览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collection-家族总览"}},[a._v("#")]),a._v(" Collection 家族总览")]),a._v(" "),e("h2",{attrs:{id:"一、知识体系结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、知识体系结构"}},[a._v("#")]),a._v(" 一、知识体系结构")]),a._v(" "),e("p",[e("img",{attrs:{src:s(575),alt:"collection"}})]),a._v(" "),e("h2",{attrs:{id:"二、知识体系介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、知识体系介绍"}},[a._v("#")]),a._v(" 二、知识体系介绍")]),a._v(" "),e("p",[a._v("容器，就是可以容纳其他Java对象的对象。"),e("strong",[a._v("Java Collections Framework(JCF)")]),a._v(" 为Java开发者提供了通用的容器，其始于JDK 1.2，优点是:")]),a._v(" "),e("ul",[e("li",[a._v("降低编程难度")]),a._v(" "),e("li",[a._v("提高程序性能")]),a._v(" "),e("li",[a._v("提高API间的互操作性")]),a._v(" "),e("li",[a._v("降低学习难度")]),a._v(" "),e("li",[a._v("降低设计和实现相关API的难度")]),a._v(" "),e("li",[a._v("增加程序的重用性")])]),a._v(" "),e("p",[a._v("Java容器里只能放对象，对于基本类型(int, long, float, double等)，需要将其包装成对象类型后(Integer, Long, Float, Double等)才能放到容器里。很多时候拆包装和解包装能够自动完成。这虽然会导致额外的性能和空间开销，但简化了设计和编程。")]),a._v(" "),e("h2",{attrs:{id:"三、collection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、collection"}},[a._v("#")]),a._v(" 三、Collection")]),a._v(" "),e("blockquote",[e("p",[a._v("容器主要包括 Collection 和 Map 两种，Collection 存储着对象的集合，而 Map 存储着键值对(两个对象)的映射表。")])]),a._v(" "),e("h3",{attrs:{id:"set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[a._v("#")]),a._v(" Set")]),a._v(" "),e("h4",{attrs:{id:"treeset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#treeset"}},[a._v("#")]),a._v(" TreeSet")]),a._v(" "),e("p",[a._v("基于红黑树实现，支持有序性操作，例如根据一个范围查找元素的操作。但是查找效率不如 HashSet，HashSet 查找的时间复杂度为 O(1)，TreeSet 则为 O(logN)。")]),a._v(" "),e("h4",{attrs:{id:"hashset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[a._v("#")]),a._v(" HashSet")]),a._v(" "),e("p",[a._v("基于哈希表实现，支持快速查找，但不支持有序性操作。并且失去了元素的插入顺序信息，也就是说使用 Iterator 遍历 HashSet 得到的结果是不确定的。")]),a._v(" "),e("h4",{attrs:{id:"linkedhashset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset"}},[a._v("#")]),a._v(" LinkedHashSet")]),a._v(" "),e("p",[a._v("具有 HashSet 的查找效率，且内部使用双向链表维护元素的插入顺序。")]),a._v(" "),e("h3",{attrs:{id:"list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" List")]),a._v(" "),e("h4",{attrs:{id:"arraylist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arraylist"}},[a._v("#")]),a._v(" ArrayList")]),a._v(" "),e("p",[a._v("基于动态数组实现，支持随机访问。")]),a._v(" "),e("h4",{attrs:{id:"vector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vector"}},[a._v("#")]),a._v(" Vector")]),a._v(" "),e("p",[a._v("和 ArrayList 类似，但它是线程安全的。")]),a._v(" "),e("h4",{attrs:{id:"linkedlist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist"}},[a._v("#")]),a._v(" LinkedList")]),a._v(" "),e("p",[a._v("基于双向链表实现，只能顺序访问，但是可以快速地在链表中间插入和删除元素。不仅如此，LinkedList 还可以用作栈、队列和双向队列。")]),a._v(" "),e("h3",{attrs:{id:"queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[a._v("#")]),a._v(" Queue")]),a._v(" "),e("h4",{attrs:{id:"linkedlist-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist-2"}},[a._v("#")]),a._v(" LinkedList")]),a._v(" "),e("p",[a._v("可以用它来实现双向队列。")]),a._v(" "),e("h4",{attrs:{id:"priorityqueue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#priorityqueue"}},[a._v("#")]),a._v(" PriorityQueue")]),a._v(" "),e("p",[a._v("基于堆结构实现，可以用它来实现优先队列。")]),a._v(" "),e("h2",{attrs:{id:"四、map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、map"}},[a._v("#")]),a._v(" 四、Map")]),a._v(" "),e("h3",{attrs:{id:"treemap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#treemap"}},[a._v("#")]),a._v(" TreeMap")]),a._v(" "),e("p",[a._v("基于红黑树实现。")]),a._v(" "),e("h3",{attrs:{id:"hashmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmap"}},[a._v("#")]),a._v(" HashMap")]),a._v(" "),e("p",[a._v("基于哈希表实现。")]),a._v(" "),e("h3",{attrs:{id:"hashtable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashtable"}},[a._v("#")]),a._v(" HashTable")]),a._v(" "),e("p",[a._v("和 HashMap 类似，但它是线程安全的，这意味着同一时刻多个线程可以同时写入 HashTable 并且不会导致数据不一致。它是遗留类，不应该去使用它。现在可以使用 ConcurrentHashMap 来支持线程安全，并且 ConcurrentHashMap 的效率会更高，因为 ConcurrentHashMap 引入了分段锁。")]),a._v(" "),e("h3",{attrs:{id:"linkedhashmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashmap"}},[a._v("#")]),a._v(" LinkedHashMap")]),a._v(" "),e("p",[a._v("使用双向链表来维护元素的顺序，顺序为插入顺序或者最近最少使用(LRU)顺序。")])])}),[],!1,null,null,null);t.default=r.exports}}]);