(function(){dust.register("subject",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/selectedSubjectPage?subject_id=").reference(ctx.get("_id"),ctx,"h").write("&subject_name=").reference(ctx.get("name"),ctx,"h").write("\"><img width=\"185\" height=\"127\" src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("name"),ctx,"h").write("\" /><p>").reference(ctx.get("name"),ctx,"h").write("</p><span class=\"link\"><a href=\"#\">קריאה לפעולה</a></span></a></li>");}return body_0;})();(function(){dust.register("subject_small",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/selectedSubjectPage?subject_id=").reference(ctx.get("_id"),ctx,"h").write("&subject_name=").reference(ctx.get("name"),ctx,"h").write("\"><div class=\"img\" style='width:185px; height:57px; background-color:#f2f2f2; text-align:center; position:relative'><span style=\"top: 28%; position: relative; color:#b3b3b3; text-decoration:none\">").reference(ctx.get("name"),ctx,"h").write("</span></div></a></li>");}return body_0;})();(function(){dust.register("information_items",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/selectedItem?subject_id=").reference(ctx.get("subject_id"),ctx,"h").write("&info_id=").reference(ctx.get("_id"),ctx,"h").write("\"><div class=\"image\"><div style=\"width:175px; height:120px;\"><img  src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><p>").reference(ctx.get("title"),ctx,"h").write("</p></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_1,"block":body_2},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_2(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("cycles",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"something\"><div class=\"image\"><div style=\"width:175px; height:120px;\"><img  src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><p>").reference(ctx.get("title"),ctx,"h").write("</p></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_1,"block":body_2},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_2(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("create_discussion",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/discussion?discussion_id=").reference(ctx.get("_id"),ctx,"h").write("&subject_id=").reference(ctx.get("subject_id"),ctx,"h").write("&subject_name=").reference(ctx.get("subject_name"),ctx,"h").write("\"><div class=\"image\"><div style=\"width:175px; height:120px;\"><img  src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><p>").reference(ctx.get("title"),ctx,"h").write("</p></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_1,"block":body_2},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_2(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("actions",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"something\"><div class=\"image\"><div style=\"width:175px; height:120px;\"><img  src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><p>").reference(ctx.get("title"),ctx,"h").write("</p></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_1,"block":body_2},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_2(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("hot_info_item",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/selectedItem?subject_id=").reference(ctx.get("subject_id"),ctx,"h").write("&info_id=").reference(ctx.get("_id"),ctx,"h").write("\"><div class='img' style=\"width:250px; height:158px;\"><img src=\"").exists(ctx.getPath(false,["image_field_preview","url"]),ctx,{"else":body_1,"block":body_2},null).write("\" alt=\"").reference(ctx.get("name"),ctx,"h").write("\" /></div><h4>").reference(ctx.get("title"),ctx,"h").write("</h4><div class=\"hot_info_content\"><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_3,"block":body_4},null).write("</p></div><a href=\"javascript:void(0)\">נתונים אפשריים*</a></a></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(false,["image_field","url"]),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h");}function body_3(chk,ctx){return chk.reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_4(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("info_item_in_subject_1",body_0);function body_0(chk,ctx){return chk.write("<div value=\"").reference(ctx.get("_id"),ctx,"h").write("\" class=\"action clearfix no_line_when_hover\"><a href=\"/selectedItem?subject_id=").reference(ctx.get("subject_id"),ctx,"h").write("&info_id=").reference(ctx.get("_id"),ctx,"h").write("\"><p>").reference(ctx.get("title"),ctx,"h").write("</p><img width=\"263\" height=\"155\" src=\"").exists(ctx.getPath(false,["image_field_preview","url"]),ctx,{"else":body_1,"block":body_2},null).write("\" alt=\"{}\"/><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_3,"block":body_4},null).write("</p><p>תגיות:").section(ctx.get("tags"),ctx,{"block":body_5},null).write(" </p><a href=\"#\" class=\"button add\">הוסף</a><a href=\"/selectedItem?subject_id=").reference(ctx.get("subject_id"),ctx,"h").write("&info_id=").reference(ctx.get("_id"),ctx,"h").write("\" class=\"read-more\">קרא עוד (קישור למקור?)</a><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h").write("\"  target=\"_blank\" class=\"button flL\">שתף</a><a href=\"#\" class=\"button flL like\">1+</a></a></div>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(false,["image_field","url"]),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h");}function body_3(chk,ctx){return chk.reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_4(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}function body_5(chk,ctx){return chk.write("<a href=\"#\">&nbsp;").reference(ctx.getPath(true,[]),ctx,"h").write(" </a>");}return body_0;})();(function(){dust.register("shopping_cart_item_1",body_0);function body_0(chk,ctx){return chk.write("<div info_item_id=\"").reference(ctx.get("_id"),ctx,"h").write("\"><div class=\"frame\"><img width=\"240\" height=\"133\" src=\"").exists(ctx.getPath(false,["image_field_preview","url"]),ctx,{"else":body_1,"block":body_2},null).write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_3,"block":body_4},null).write("</p><a href=\"javascript:void(0)\" class=\"button remove\">הסר</a><a href=\"").reference(ctx.get("get_link"),ctx,"h").write("\" class=\"read-more\">קרא עוד..</a><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h",["u"]).write("\" target=\"_blank\" class=\"button\">שתף</a></div>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(false,["image_field","url"]),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h");}function body_3(chk,ctx){return chk.reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_4(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("info_item_full_view",body_0);function body_0(chk,ctx){return chk.write("<div><img width=\"489\" height=\"287\" src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("name"),ctx,"h").write("\" /><div class=\"title clearfix\"><h3>").reference(ctx.get("title"),ctx,"h").write("</h3><a href=\"#\" class=\"button add\">הוסף</a><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h").write("\" target=\"_blank\" class=\"button flL\">שתף</a><a href=\"#\" class=\"button flL\">1+</a></div><P>").reference(ctx.get("text_field"),ctx,"h",["s"]).write("</P><p>").section(ctx.get("tags"),ctx,{"block":body_1},null).write("  תגיות: </p></div>");}function body_1(chk,ctx){return chk.write("<a href=\"#\">").reference(ctx.getPath(true,[]),ctx,"h").write("  &nbsp; </a>");}return body_0;})();(function(){dust.register("pending_action_list_item",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><div class=\"frame\"><img src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><div class=\"description\"><h4>כותרת פעולה:<br>   ").reference(ctx.get("title"),ctx,"h").write("</h4><p>הסבר קצר (תיאור, משאבים, נתונים) :<br>    {}</p><p>מספר משתתפים ( + כמות משתתפים רצויה), מספר חברים משתתפים, תאריך:<br>    ").reference(ctx.get("num_of_going"),ctx,"h").write(" ( + ").reference(ctx.get("required_participants"),ctx,"h").write("),{}, ").reference(ctx.get("execution_date"),ctx,"h").write("</p><p>תאריך הצעה(כמה זמן ממתין לאישור):<br>").reference(ctx.get("creation_date"),ctx,"h").write(" ({})</p></div><div class=\"action\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h").write("\" class=\"button\">שתף</a><a href=\"#\" class=\"button\">הגב</a></div><br class=\"clear\" /><ul class=\"clearfix\">").section(ctx.get("p"),ctx,{"block":body_1},null).write("</ul></li>");}function body_1(chk,ctx){return chk.write("<li><p>").reference(ctx.getPath(true,[]),ctx,"h").write("</p></li>");}return body_0;})();(function(){dust.register("action_list_item",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><div class=\"frame\"><div style=\"width:125px; height:98px\"><img src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div></div><div class=\"description\"><h4> ").reference(ctx.get("title"),ctx,"h").write(" &nbsp;").reference(ctx.get("execution_date"),ctx,"h",["time"]).write("</h4><p>").reference(ctx.get("type"),ctx,"h").write("+").reference(ctx.get("tokens"),ctx,"h").write("</p><p>").reference(ctx.get("text_field_preview"),ctx,"h",["s"]).write("<br>משאבים:<br/>").section(ctx.get("action_resources"),ctx,{"block":body_1},null).write("</p><p><br>").reference(ctx.get("num_of_going"),ctx,"h").write(" משתתפים( חסרים ").reference(ctx.get("required_participants"),ctx,"h").write(" )</p></div><div class=\"action\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h").write("\" class=\"button\">שתף</a><a href=\"#\" class=\"button\">הצטרף</a></div></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(true,["resource","name"]),ctx,"h").write(" - ").reference(ctx.getPath(true,["amount"]),ctx,"h");}return body_0;})();(function(){dust.register("discussion_list_item",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><div class=\"frame\"><div style=\"width:125px; height:98px;\"></div><img src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div></div><div class=\"description\"><h4><br>     ").reference(ctx.get("title"),ctx,"h").write("</h4><p><br>    ").reference(ctx.get("text_field_preview"),ctx,"h",["s"]).write("</p><p>דירוג נוכחי:").reference(ctx.get("grade"),ctx,"h").write("</p><p>תאריך פתיחה:").reference(ctx.get("creation_date"),ctx,"h",["time"]).write("</p><p>מספר משתתפים:").reference(ctx.get("followers_count"),ctx,"h").write("</p></div><div class=\"action\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h").write("\" class=\"button\">שתף</a><a href=\"#\" class=\"button\">הצטרף</a></div></li>");}return body_0;})();(function(){dust.register("cycle_list_item",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><div class=\"frame\"><div style=\"width:125px; height:98px;\"><img src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div></div><div class=\"description\"><h4>").reference(ctx.get("title"),ctx,"h").write("</h4><p>מספר עוקבים:").reference(ctx.get("followers_count"),ctx,"h").write("</p><p>מספר תגובות:").reference(ctx.get("num_of_comments"),ctx,"h").write("</p><p>מספר פעולות עתידיות:{}</p><p>(פעולות שהצליחו בעבר):<br>{}</p></div><div class=\"action\"> <a href=\"#\" class=\"button\">שתף</a> <a href=\"#\" class=\"button\">הצטרף</a> </div><div class=\"action-bottom clearfix\"><p class=\"meta-data\">הפעולה הקרובה: <a href=\"#\"> ").reference(ctx.getPath(false,["upcoming_action","title"]),ctx,"h").write(" </a><span class=\"divider\">|</span> <a href=\"#\">").reference(ctx.getPath(false,["upcoming_action","title"]),ctx,"h").write("</a><span class=\"divider\">|</span> <a href=\"#\">מספר משתתפים").reference(ctx.getPath(false,["upcoming_action","num_of_going"]),ctx,"h").write("</a></p><a href=\"#\" class=\"button\">הצטרף</a></div></li>");}return body_0;})();(function(){dust.register("discussion_full_view",body_0);function body_0(chk,ctx){return chk.write("<div class=\"discussions clearfix\"><div class=\"frame1 flR\"> <img src=\"resources/images/assets/image19.jpg\" alt=\"image19\"/> </div><div class=\"description clearfix\"><h5>").reference(ctx.get("title"),ctx,"h").write("</h5><h5>").reference(ctx.get("text_field"),ctx,"h").write("</h5><h5>").reference(ctx.get("vision_text"),ctx,"h").write("</h5><p>שמו אינו מדינות דת, זקוק קבלו מועמדים מתן בה.</p><div class=\"tags clearfix\"><p class=\"clearfix\">").section(ctx.get("tags"),ctx,{"block":body_1},null).write("<a href=\"#\" class=\"add\">הוסף תגיות</a></p><p class=\"highlight clearfix\"><span>הצעה לשינוי</span><span>היסטוריה*</span></p></div><div class=\"buttons\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h").write("\" target=\"_blank\" class=\"button flL\">שתף</a><a href=\"#\" class=\"button flL\">דירוג המסמך").reference(ctx.get("grade"),ctx,"h").write("</a><a href=\"#\" class=\"button flL\">הגב</a></div></div></div>");}function body_1(chk,ctx){return chk.write("<a href=\"#\">").reference(ctx.getPath(true,[]),ctx,"h").write("  &nbsp; </a>");}return body_0;})();