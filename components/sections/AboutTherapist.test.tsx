import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AboutTherapist } from './AboutTherapist';

expect.extend(toHaveNoViolations);

describe('AboutTherapist', () => {
  it('renders the about therapist section with correct Portuguese text', () => {
    render(<AboutTherapist />);

    expect(screen.getByText('Olá, sou Natasha Pereira.')).toBeInTheDocument();

    // Test the h3 specifically
    const subheading = screen.getByRole('heading', { level: 3 });
    expect(subheading).toHaveTextContent(
      'Sou uma psicóloga que não tem dúvidas: crio espaços seguros para que mulheres possam se libertar e ocupar, enfim, o lugar que merecem.'
    );

    expect(
      screen.getByRole('link', { name: 'Saiba mais sobre mim' })
    ).toBeInTheDocument();
  });

  it('renders the main heading as h2', () => {
    render(<AboutTherapist />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Olá, sou Natasha Pereira.');
  });

  it('renders the image with correct alt text', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText('Natasha Pereira - Psicóloga');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('_DSC9840.jpg')
    );
  });

  it('renders all paragraphs of the bio', () => {
    render(<AboutTherapist />);

    expect(
      screen.getByText(
        'Formada em 2019, minha trajetória profissional foi moldada pela compreensão de uma dinâmica que, vivida na pele, percebo ser comum a tantas mulheres: a busca constante por provar nosso valor, a necessidade de aceitação e o medo de não ser útil o suficiente.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Sempre fui movida por causas e acolhimento. Meus anos de voluntariado e trabalho com equoterapia me ensinaram a escutar para além das palavras. Mas foi na clínica que encontrei meu lugar de realização: o espaço onde transformo essa sensibilidade em um cuidado técnico e humano.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Lutar por causas diz sobre mim e sobre meu trabalho. Acredito que a transformação estrutural da nossa sociedade acontece no coletivo, mas é no campo individual que encontramos espaço e sustentação para ela. No consultório, construímos uma relação de confiança, clareza e não julgamento.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Trabalhar com mulheres faz sentido porque a liberdade é o que me guia. Aqui, não há o como deveria ser, mas espaço para se enxergar, sentir o mundo do próprio jeito e desejar o que quiser. Te acompanho na escolha que faz sentido para você.'
      )
    ).toBeInTheDocument();

    // Test the last paragraph specifically by finding all paragraphs and checking the last one
    const paragraphs = screen.getAllByRole('paragraph');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    expect(lastParagraph).toHaveTextContent(
      'Sou uma psicóloga que não tem dúvidas: crio espaços seguros para que mulheres possam se libertar e ocupar, enfim, o lugar que merecem.'
    );
  });

  it('renders the link with correct href', () => {
    render(<AboutTherapist />);

    const link = screen.getByRole('link', { name: 'Saiba mais sobre mim' });
    expect(link).toHaveAttribute('href', '#about');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<AboutTherapist />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
