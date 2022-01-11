package com.example.reproduction.views.flow;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("/test/test")
public class TestView extends VerticalLayout {
    public TestView() {
        Paragraph text = new Paragraph("This is the view defined in the java part");
        add(text);

        Button redirection = new Button("Redirection from the Java Side");
        redirection.addClickListener(buttonClickEvent ->
                UI.getCurrent().access(() ->
                        UI.getCurrent().navigate("/flow")
                ));

        add(redirection);
    }
}
