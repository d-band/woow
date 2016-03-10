woow - wo[rkfl]ow system
===

> mini workflow & BPM system


## Todo

- [ ] 后端Koa，前端React
- [ ] 表单模板（可采用antd）
- [ ] 类似于有限自动机的流程管理
- [ ] 设计DSL


## Links

- http://www.graphviz.org/content/dot-language
- https://en.wikipedia.org/wiki/Flowchart
- https://en.wikipedia.org/wiki/DOT_(graph_description_language)


## Graph

![Alt text](http://g.gravizo.com/g?
  digraph G {
    aize ="4,4";
    main [shape=box];
    main -> parse [weight=8];
    parse -> execute;
    main -> init [style=dotted];
    main -> cleanup;
    execute -> { make_string; printf}
    init -> make_string;
    edge [color=red];
    main -> printf [style=bold,label="100 times"];
    make_string [label="make a string"];
    node [shape=box,style=filled,color=".7 .3 1.0"];
    execute -> compare;
  }
)