/*:
 * @target MZ
 * @plugindesc IdleAnimation — это плагин для последовательных и комбинированных смещений спрайтов. Поддержка X/Y шагов, диагоналей, опционального реверса и работы с игроком и NPC.
 * @author Apolion
 *
 * @param AmplitudeX
 * @text Амплитуда X
 * @type number
 * @min 0
 * @default 1
 * @desc Смещение по горизонтали (в пикселях).
 *
 * @param AmplitudeY
 * @text Амплитуда Y
 * @type number
 * @min 0
 * @default 1
 * @desc Смещение по вертикали (в пикселях).
 *
 * @param Speed
 * @text Скорость шага
 * @type number
 * @min 1
 * @default 8
 * @desc Количество кадров на выполнение одного шага из Sequence.
 *
 * @param EnablePlayer
 * @text Включить для игрока
 * @type boolean
 * @on Да
 * @off Нет
 * @default true
 * @desc Если включено — эффект применяется и к игроку.
 *
 * @param Sequence
 * @text Последовательность
 * @type string
 * @default x,x+-y,-x+y,-x,-x,-x+-y,x+y,x
 * @desc Последовательность шагов, разделённых запятыми. Каждый шаг может содержать X и/или Y (например: X, Y, X+Y, -X+Y).
 *
 * @param EnableReverse
 * @text Включить реверс
 * @type boolean
 * @on Да
 * @off Нет
 * @default false
 * @desc Если включено — после завершения прямого цикла спрайт проходит те же шаги в обратном порядке, возвращаясь в центр.
 *
 * @help
 * ================================
 *  ОПИСАНИЕ ПЛАГИНА
 * ================================
 * Плагин IdleAnimation позволяет создавать иллюзию «живости» у персонажей и 
 * игрока, задавая последовательность смещений их спрайтов.
 *
 * ================================
 *  ОСНОВНЫЕ ВОЗМОЖНОСТИ
 * ================================
 * 1. Поддержка игрока и NPC:
 *    - Для игрока включается параметром EnablePlayer.
 *    - Для NPC — нужно добавить в заметки события тег <IdleAnimation>.
 *
 * 2. Настраиваемая последовательность (Sequence):
 *    - Каждый шаг разделяется запятой.
 *    - Шаги могут быть: X, -X, Y, -Y.
 *    - Можно комбинировать оси: X+Y, -X+Y, X+-Y, -X+-Y.
 *      Например: X+Y сместит спрайт сразу вправо-вниз.
 *
 * 3. Параметры амплитуды:
 *    - AmplitudeX и AmplitudeY задают величину смещения по осям.
 *    - В шагах X и -X используется AmplitudeX.
 *    - В шагах Y и -Y используется AmplitudeY.
 *
 * 4. Настройка скорости:
 *    - Speed задаёт количество кадров для выполнения одного шага.
 *
 * 5. Реверс движения:
 *    - EnableReverse = true → после завершения прямой последовательности
 *      выполняется обратная, возвращая спрайт в центр.
 *    - EnableReverse = false → движение выполняется только по прямой
 *      последовательности и зацикливается.
 *
 * ================================
 *  ПРИМЕРЫ ПОСЛЕДОВАТЕЛЬНОСТЕЙ
 * ================================
 * 1. X,Y,X,Y → спрайт смещается вправо, затем вниз, вправо, вниз.
 * 2. X+Y,-X+-Y → диагональ вправо-вниз и диагональ влево-вверх.
 * 3. -X+-Y,X+Y → диагональ влево-вверх и диагональ вправо-вниз.
 * 4. X+Y,-X+-Y,X+-Y,-X+Y → все четыре диагонали по очереди.
 *
 * ================================
 *  ПРИМЕЧАНИЕ
 * ================================
 * Советую использовать стандартные настройки выставленные после установки, 
 * так как они наиболее органично смотрятся со спрайтами персонажей.
 * 
 * Для NPC нужно добавить тег <IdleAnimation> в заметки события.
 * Для игрока эффект активируется, если он стоит на месте (isStopping).
 *
 * ================================
 *  ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ
 * ================================
 * Настоящим я, Apolion, предоставляю право на использование данного 
 * плагина в любых целях, включая коммерческую эксплуатацию, монетизацию 
 * и модификацию исходного кода.
 * 
 * Разрешается использование плагина в коммерческих и некоммерческих проектах, 
 * а также внесение изменений в его код для адаптации под нужды конкретного 
 * проекта.
 * 
 * Автор не несёт ответственности за любые прямые или косвенные убытки, потерю 
 * данных или иные последствия, возникшие в результате использования или 
 * невозможности использования данного программного обеспечения.
 * 
 * Пользователь принимает на себя все риски, связанные с использованием плагина 
 * в своих проектах. Никаких претензий со стороны автора относительно прибыли, 
 * полученной в результате использования данного программного обеспечения, 
 * предъявляться не будет.
 *
 * Автор плагина: Apolion
 * 
 * 
 * 
 */

(() => {
  const pluginName = (function() {
    try {
      const src = document.currentScript && document.currentScript.src ? document.currentScript.src : null;
      if (src) return src.split('/').pop().replace(/\.js$/i, '');
    } catch (e) {}
    return 'IdleAnimation';
  })();

  const params = PluginManager.parameters(pluginName) || {};
  const amplitudeX = Number(params['AmplitudeX'] || 5);
  const amplitudeY = Number(params['AmplitudeY'] || 5);
  const speed = Math.max(1, Number(params['Speed'] || 30));
  const enablePlayer = String(params['EnablePlayer'] || 'true').toLowerCase() === 'true';
  const sequenceStr = String(params['Sequence'] || 'X,Y,X,Y');
  const enableReverse = String(params['EnableReverse'] || 'true').toLowerCase() === 'true';

  function parseSequence(str) {
    return str.split(',').map(s => s.trim()).filter(s => s.length > 0).map(token => {
      const comps = [];
      const regex = /([+-]?)(X|Y)/gi;
      let m;
      while ((m = regex.exec(token)) !== null) {
        const sign = m[1] === '-' ? -1 : 1;
        const axis = m[2].toUpperCase();
        comps.push({ axis, sign });
      }
      return comps;
    }).filter(step => step.length > 0);
  }

  const parsedSequence = parseSequence(sequenceStr);
  const totalSteps = parsedSequence.length;

  const _Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
  Sprite_Character.prototype.updatePosition = function() {
    _Sprite_Character_updatePosition.call(this);

    if (!this._character) return;
    try {
      if (typeof this._character.isIdleShaking === 'function' && this._character.isIdleShaking() && totalSteps > 0) {
        const t = Graphics.frameCount;
        const totalFrames = totalSteps * speed;
        let forwardFrame;

        if (enableReverse) {
          let frameInCycle = t % (2 * totalFrames);
          forwardFrame = frameInCycle;
          if (frameInCycle >= totalFrames) {
            forwardFrame = 2 * totalFrames - 1 - frameInCycle;
          }
        } else {
          forwardFrame = t % totalFrames;
        }

        const completedSteps = Math.floor(forwardFrame / speed);
        const frameInStep = forwardFrame % speed;
        const progress = (frameInStep + 1) / speed;

        let offX = 0;
        let offY = 0;

        for (let i = 0; i < completedSteps; i++) {
          const step = parsedSequence[i];
          for (const comp of step) {
            if (comp.axis === 'X') offX += comp.sign * amplitudeX;
            else if (comp.axis === 'Y') offY += comp.sign * amplitudeY;
          }
        }

        if (completedSteps < totalSteps) {
          const curStep = parsedSequence[completedSteps];
          for (const comp of curStep) {
            if (comp.axis === 'X') offX += comp.sign * Math.round(progress * amplitudeX);
            else if (comp.axis === 'Y') offY += comp.sign * Math.round(progress * amplitudeY);
          }
        }

        this._offsetX = offX;
        this._offsetY = offY;
        this.x = Math.round(this._character.screenX() + this._offsetX);
        this.y = Math.round(this._character.screenY() + this._offsetY);
      } else {
        this._offsetX = 0;
        this._offsetY = 0;
        this.x = Math.round(this._character.screenX());
        this.y = Math.round(this._character.screenY());
      }
    } catch (e) {
      // Silent fail
    }
  };

  Game_CharacterBase.prototype.isIdleShaking = function() {
    if (this instanceof Game_Player) {
      return enablePlayer && this.isStopping && this.isStopping();
    }
    if (typeof Game_Event !== 'undefined' && this instanceof Game_Event) {
      const eventData = this.event && this.event();
      let note = '';
      if (eventData && typeof eventData.note === 'string') note = eventData.note;
      else if (this.page && this.page() && typeof this.page().note === 'string') note = this.page().note;
      const hasTag = /<IdleAnimation>/i.test(note);
      return hasTag && this.isStopping && this.isStopping();
    }
    return false;
  };
})();
