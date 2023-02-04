import { screen, render, logDOM } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });

    test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    test('Input ve button dokumanda bulunmalı',() => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test('Inputa string girilip butona basilinca listeye eklenmeli', () => {
        //inputu doldur
        const name = "Mehmet";
        userEvent.type(input, name);

        //butonu tıkla
        userEvent.click(button);

        //assertion
        expect(screen.getByText(name)).toBeInTheDocument();

    })

});
