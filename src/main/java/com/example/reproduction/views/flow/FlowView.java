package com.example.reproduction.views.flow;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Flow")
@Route(value = "flow")
public class FlowView extends VerticalLayout {

    private TextField name;
    private Button sayHello;

    public FlowView() {
        Paragraph text = new Paragraph("This is a Flow View, with (normally) the default / catchall layout.");
        Paragraph text2 = new Paragraph("Try refreshing to see the layout change to what's expected.");
        Paragraph text3 = new Paragraph("Also, see the fact that no notification happened for the route change!");
        add(text, text2, text3);
    }

}
