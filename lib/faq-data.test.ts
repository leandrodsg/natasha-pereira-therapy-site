import { faqItems, faqSectionContent, type FAQItem } from './faq-data';

describe('FAQ Data', () => {
  describe('faqItems', () => {
    it('should have 6 FAQ items', () => {
      expect(faqItems).toHaveLength(6);
    });

    it('should have unique IDs for each item', () => {
      const ids = faqItems.map((item) => item.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(faqItems.length);
    });

    it('should have required properties for each item', () => {
      faqItems.forEach((item: FAQItem) => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('question');
        expect(item).toHaveProperty('answer');
        expect(typeof item.id).toBe('string');
        expect(typeof item.question).toBe('string');
        expect(typeof item.answer).toBe('string');
      });
    });

    it('should have non-empty content', () => {
      faqItems.forEach((item: FAQItem) => {
        expect(item.id.length).toBeGreaterThan(0);
        expect(item.question.length).toBeGreaterThan(0);
        expect(item.answer.length).toBeGreaterThan(0);
      });
    });

    it('should have questions ending with question mark', () => {
      faqItems.forEach((item: FAQItem) => {
        expect(item.question).toMatch(/\?$/);
      });
    });

    it('should contain the expected questions', () => {
      const questions = faqItems.map((item) => item.question);
      expect(questions).toContain('Como funciona o primeiro atendimento?');
      expect(questions).toContain('Quanto tempo dura cada sessão?');
      expect(questions).toContain('Qual é o público-alvo dos atendimentos?');
      expect(questions).toContain('O que é Gestalt-terapia?');
      expect(questions).toContain(
        'Preciso estar passando por algo "muito grave" para buscar terapia?'
      );
    });
  });

  describe('faqSectionContent', () => {
    it('should have label property', () => {
      expect(faqSectionContent.label).toBe('Tire suas dúvidas');
    });

    it('should have heading property', () => {
      expect(faqSectionContent.heading).toBe('Perguntas Frequentes');
    });

    it('should have ctaText property', () => {
      expect(faqSectionContent.ctaText).toBe('Ainda tem dúvidas? Fale comigo');
    });

    it('should have ctaMessage property', () => {
      expect(faqSectionContent.ctaMessage).toBe(
        'Olá, tenho uma dúvida sobre o atendimento'
      );
    });
  });
});
