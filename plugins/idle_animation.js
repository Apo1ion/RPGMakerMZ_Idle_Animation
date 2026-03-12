/*~struct~IdleAnimationConfig:
 * @param Sequence
 * @text Последовательность
 * @type string
 * @default x
 * @desc Последовательность шагов, разделённых запятыми.
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
 * @desc Количество кадров на выполнение одного шага.
 *
 * @param EnableReverse
 * @text Включить реверс
 * @type boolean
 * @on Да
 * @off Нет
 * @default false
 * @desc Если включено — после завершения прямого цикла спрайт проходит шаги в обратном порядке.
 */

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
 * @default Да
 * @desc Если включено — эффект применяется и к игроку.
 *
 * @param Sequence
 * @text Последовательность
 * @type string
 * @default x,x+-y,-x+y,-x,-x,-x+-y,x+y,x
 * @desc Базовая последовательность шагов, разделённых запятыми. Используется игроком и NPC с тегом <IdleAnimation>.
 *
 * @param EnableReverse
 * @text Включить реверс
 * @type boolean
 * @on Да
 * @off Нет
 * @default Нет
 * @desc Если включено — после завершения прямого цикла спрайт проходит те же шаги в обратном порядке, возвращаясь в центр.
 * 
 * @param IdleAnimation 1
 * @text Настройки для NPC 1
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 1>.
 *
 * @param IdleAnimation 2
 * @text Настройки для NPC 2
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 2>.
 *
 * @param IdleAnimation 3
 * @text Настройки для NPC 3
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 3>.
 * 
 * @param IdleAnimation 4
 * @text Настройки для NPC 4
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 4>.
 * 
 * @param IdleAnimation 5
 * @text Настройки для NPC 5
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 5>.
 * 
 * @param IdleAnimation 6
 * @text Настройки для NPC 6
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 6>.
 * 
 * @param IdleAnimation 7
 * @text Настройки для NPC 7
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 7>.
 * 
 * @param IdleAnimation 8
 * @text Настройки для NPC 8
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 8>.
 *
 * @param IdleAnimation 9
 * @text Настройки для NPC 9
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 9>.
 * 
 * @param IdleAnimation 10
 * @text Настройки для NPC 10
 * @type struct<IdleAnimationConfig>
 * @default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8","EnableReverse":"false"}
 * @desc Персональные настройки для NPC с тегом <IdleAnimation 10>.
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
 *    - Для игрока включается параметром Включить для игрока.
 *    - Для NPC можно использовать теги:
 *      <IdleAnimation>
 *      <IdleAnimation 1>
 *      <IdleAnimation 2>
 *      <IdleAnimation 3>
 *      и так далее.
 *
 * 2. Базовая анимация:
 *    - Игрок и NPC с тегом <IdleAnimation> используют обычные параметры
 *      Последовательность, Амплитуда X, Амплитуда Y, 
 *           Скорость шага, Включить реверс
 *
 * 3. Индивидуальные настройки для NPC:
 *    - NPC с тегом <IdleAnimation 1> используют параметр "Настройки для NPC 1".
 *    - NPC с тегом <IdleAnimation 2> используют параметр "Настройки для NPC 2".
 *    - NPC с тегом <IdleAnimation 3> используют параметр "Настройки для NPC 3".
 *      и так далее.
 *    - Внутри каждого такого параметра можно настроить:
 *      Последовательность, Амплитуда X, Амплитуда Y, 
 *           Скорость шага, Включить реверс
 *
 * 4. Как добавить ещё один параметр прямо в плагин:
 *    - Откройте JS-файл плагина.
 *    - Скопируйте блок параметра, например:
 *
 *      param IdleAnimation 11
 *      text Настройки для NPC 11
 *      type struct<IdleAnimationConfig>
 *      default {"Sequence":"","AmplitudeX":"1","AmplitudeY":"1","Speed":"8",
 *      "EnableReverse":"false"}
 *      desc Персональные настройки для NPC с тегом <IdleAnimation 11>.
 *
 *    - Увеличьте номер.
 *    - После этого в заметках события используйте тег <IdleAnimation 11>.
 *    - Код плагина автоматически подхватит любой параметр с именем
 *      "IdleAnimation N", где N — число.
 *
 * ================================
 *  ПРИМЕЧАНИЕ
 * ================================
 * Советую использовать стандартные настройки выставленные после установки,
 * так как они наиболее органично смотрятся со спрайтами персонажей.
 * 
 * Чем больше число (значение), тем меньше скорость шага. Если вам нужна 
 * медленная скорость, начните с значения 100 и регулируйте в нужную вам 
 * сторону.
 *
 * Для NPC можно добавить теги <IdleAnimation>, <IdleAnimation 1>,
 * <IdleAnimation 2> и т.д. в заметки события.
 * Для игрока эффект активируется, если он стоит на месте.
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

  function toNumber(value, fallback, minValue) {
    const num = Number(value);
    if (!Number.isFinite(num)) return fallback;
    if (typeof minValue === 'number') return Math.max(minValue, num);
    return num;
  }

  function toBoolean(value, fallback) {
    if (typeof value === 'boolean') return value;
    if (value == null || value === '') return fallback;
    return String(value).toLowerCase() === 'true';
  }

  function parseSequence(str) {
    return String(str || '')
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .map(token => {
        const comps = [];
        const regex = /([+-]?)(X|Y)/gi;
        let m;
        while ((m = regex.exec(token)) !== null) {
          const sign = m[1] === '-' ? -1 : 1;
          const axis = m[2].toUpperCase();
          comps.push({ axis, sign });
        }
        return comps;
      })
      .filter(step => step.length > 0);
  }

  function buildConfig(raw) {
    const sequenceStr = String(raw.Sequence || raw.sequence || '').trim();
    return {
      sequenceText: sequenceStr,
      sequence: parseSequence(sequenceStr),
      amplitudeX: toNumber(raw.AmplitudeX, 1, 0),
      amplitudeY: toNumber(raw.AmplitudeY, 1, 0),
      speed: toNumber(raw.Speed, 8, 1),
      enableReverse: toBoolean(raw.EnableReverse, false)
    };
  }

  function parseStructParam(value) {
    if (value == null) return null;
    if (typeof value === 'object') return value;
    const text = String(value).trim();
    if (!text) return null;
    if (text[0] !== '{') {
      return { Sequence: text };
    }
    try {
      return JSON.parse(text);
    } catch (e) {
      return { Sequence: text };
    }
  }

  const defaultConfig = buildConfig({
    Sequence: params['Sequence'] || 'X,Y,X,Y',
    AmplitudeX: params['AmplitudeX'] || 5,
    AmplitudeY: params['AmplitudeY'] || 5,
    Speed: params['Speed'] || 30,
    EnableReverse: params['EnableReverse'] || false
  });

  const enablePlayer = toBoolean(params['EnablePlayer'], true);

  function buildNamedConfigs(parameters) {
    const map = {};
    Object.keys(parameters).forEach(key => {
      const match = /^IdleAnimation\s+(\d+)$/i.exec(String(key).trim());
      if (!match) return;

      const id = match[1];
      const rawStruct = parseStructParam(parameters[key]);
      if (!rawStruct) return;

      const cfg = buildConfig(rawStruct);
      if (cfg.sequence.length > 0) {
        map[id] = cfg;
      }
    });
    return map;
  }

  const namedConfigs = buildNamedConfigs(params);

  function readEventNote(event) {
    if (!event) return '';
    if (typeof event.note === 'string') return event.note;
    return '';
  }

  Game_CharacterBase.prototype.idleAnimationConfig = function() {
    if (this instanceof Game_Player) {
      return defaultConfig;
    }

    if (typeof Game_Event !== 'undefined' && this instanceof Game_Event) {
      const eventData = this.event && this.event();
      const note = readEventNote(eventData);
      const numberedMatch = /<IdleAnimation\s+(\d+)>/i.exec(note);

      if (numberedMatch) {
        const sequenceId = numberedMatch[1];
        return namedConfigs[sequenceId] || defaultConfig;
      }

      if (/<IdleAnimation>/i.test(note)) {
        return defaultConfig;
      }
    }

    return null;
  };

  Game_CharacterBase.prototype.idleAnimationSequence = function() {
    const config = this.idleAnimationConfig();
    return config ? config.sequence : [];
  };

  Game_CharacterBase.prototype.isIdleShaking = function() {
    const config = this.idleAnimationConfig();
    if (!config || config.sequence.length <= 0) return false;

    if (this instanceof Game_Player) {
      return enablePlayer && this.isStopping && this.isStopping();
    }

    if (typeof Game_Event !== 'undefined' && this instanceof Game_Event) {
      return this.isStopping && this.isStopping();
    }

    return false;
  };

  const _Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
  Sprite_Character.prototype.updatePosition = function() {
    _Sprite_Character_updatePosition.call(this);

    if (!this._character) return;

    try {
      const config = typeof this._character.idleAnimationConfig === 'function'
        ? this._character.idleAnimationConfig()
        : null;
      const sequence = config ? config.sequence : [];
      const totalSteps = sequence.length;

      if (typeof this._character.isIdleShaking === 'function' && this._character.isIdleShaking() && totalSteps > 0) {
        const amplitudeX = config.amplitudeX;
        const amplitudeY = config.amplitudeY;
        const speed = config.speed;
        const enableReverse = config.enableReverse;
        const t = Graphics.frameCount;
        const totalFrames = totalSteps * speed;
        let forwardFrame;

        if (enableReverse) {
          const frameInCycle = t % (2 * totalFrames);
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
          const step = sequence[i];
          for (const comp of step) {
            if (comp.axis === 'X') offX += comp.sign * amplitudeX;
            else if (comp.axis === 'Y') offY += comp.sign * amplitudeY;
          }
        }

        if (completedSteps < totalSteps) {
          const curStep = sequence[completedSteps];
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
})();
